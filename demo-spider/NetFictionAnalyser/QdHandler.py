import time
import random
import datetime

from NetFictionAnalyser.Conns import conn_db
from NetFictionAnalyser.QdPageInfo import QdPageInfo
from NetFictionAnalyser.QdFictionInfo import QdFictionInfo


class NoFictionError(Exception):
    """No fiction error"""

    def __init__(self):
        """
        constructor
        """
        # Call the base class constructor with the parameters it needs
        super(NoFictionError, self).__init__('Shortcut not taken')


class QdHandler:
    """
    QiDian fiction list page
    """

    def __init__(self, size=-1, sign=-1, tag=-1, chan_id=-1, sub_cate_id=-1, order_id=-1, update=-1, month=-1,
                 style=1, action=-1, vip=-1, start_page=1, end_page=2, sleep_base=1, sleep_range=2):
        """
        initialization function
        :param size: fiction size code, -1 means all size, 1 means below 300k characters, 2 means 300k to 500k, 3 means
        500k to 1m, 4 means 1m to 2m, 5 means more than 2m
        :param sign: fiction signed or not, -1 means both kinds, 1 means signed fictions, 2 means competitive fictions
        :param tag: user defined tag
        :param chan_id: channel id, -1 means all channels
        :param sub_cate_id: sub channel id, -1 means all sub channels
        :param order_id: order type, -1 is website's default value, 5 means order by update time
        :param update: update time, -1 means all, 1 updated in the past 3 days, 2 means in the past week, 3 means in the
        past 15 days, 4 means in the past month
        :param month: fictions in 3 month or not, -1 by default, means all, 3 means yes
        :param style: list style, 1 by default, means images list, 2 means title list
        :param action: fiction finished or not, -1 by default, means both kinds, 0 means still working, 1 means finished
        :param vip: VIP author or not, -1 by default, means both kinds, 0 means free fictions, 1 means VIP fictions
        :param start_page: from where to crawl, 1 by default
        :param end_page: to where to crawl, 2 by default. if -1 then keep crawling until first fiction updated today
        :param sleep_base: crawler sleep basic time, seconds
        :param sleep_range: crawler sleep range time, seconds
        """
        self.size = size
        self.sign = sign
        self.tag = tag
        self.chanId = chan_id
        self.subCateId = sub_cate_id
        self.orderId = order_id
        self.update = update
        self.month = month
        self.style = style
        self.action = action
        self.vip = vip

        # store fiction info
        self.fictions = []

        # pages to crawl
        self.start_page = start_page
        self.end_page = end_page

        # crawler sleep interval
        self.sleep_base = sleep_base
        self.sleep_range = sleep_range

    def get_url(self, page_number=1):
        """
        get list page url
        :param page_number: page number
        :return:
        """
        return ''.join(
            ['http://a.qidian.com/', '?size=', str(self.size), '&sign=', str(self.sign), '&tag=', str(self.tag),
             '&chanId=', str(self.chanId), '&subCateId=', str(self.subCateId), '&orderId=', str(self.orderId),
             '&update=', str(self.update), '&page=', str(page_number), '&month=', str(self.month), '&style=',
             str(self.style), '&action=', str(self.action), '&vip=', str(self.vip)])

    def set_page_range(self, start_page=1, end_page=2):
        """
        :param start_page: start page number, 1 by default
        :param end_page: end page number, by default is 2
        :return:
        """
        self.start_page = start_page
        self.end_page = end_page

    def take_shortcut(self, if_print=False, output_file=False, from_when=86400):
        """
        short cut for updated novel in 24 hours
        :param if_print: if print to console
        :param output_file: if output to file, False by default
        :param from_when: second number before now, crawl back to this time
        :return:
        """
        start_page = 1
        end_page = 400
        now = datetime.datetime.now().timestamp()
        from_when = now - from_when
        if output_file:
            output_file = open(str(round(now)) + '.txt', 'w')
        should_stop = False
        for i in range(start_page, end_page):
            if should_stop:
                return
            self.__sleep()
            page = QdPageInfo(self.get_url(i))
            if if_print:
                print('page ' + str(i) + ':')
            for brief in page.briefs:
                self.fictions.append(brief)
                if if_print:
                    print(brief.__dict__)
                if output_file:
                    output_file.write('%s\n' % str(brief.__dict__))
                # check if it's all fictions updated in 1 day have been scanned
                if brief.updateTime - from_when < 0:
                    should_stop = True

    def to_db(self):
        """
        insert fictions into database
        :return:
        """
        bulk = conn_db().initialize_ordered_bulk_op()
        for fiction in self.fictions:
            bulk.find({'id': fiction.id}).upsert().update({'$set': fiction.__dict__})
        bulk.execute()

    def from_db(self, if_print=True):
        """
        get fictions from db
        :param if_print:
        :return:
        """
        for fiction in conn_db().find():
            if if_print:
                print(fiction)
            self.fictions.append(QdFictionInfo(fiction))

    def handle(self, if_print=False):
        """
        get data from start page to end page
        :param if_print: if print to console
        :return:
        """
        if len(self.fictions) == 0:
            raise NoFictionError()
        else:
            for fiction in self.fictions:
                fiction.retrieve()
                self.__sleep()
                if if_print:
                    print(fiction.__dict__)
            return

    def statistics_cat(self):
        """
        calculate category statistics
        :return:
        """
        result = {}
        for fiction in self.fictions:
            if fiction.category not in result:
                result[fiction.category] = 1
            else:
                result[fiction.category] += 1
        return result

    def __sleep(self):
        """
        sleep interval
        :return:
        """
        time.sleep((self.sleep_base * 100 + self.sleep_range * random.random() * 100) / 100)

    def print(self):
        """
        print all fiction brief info
        :return:
        """
        for fiction in self.fictions:
            print(fiction.__dict__)


def test():
    """
    test if QdPageHandler working
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2)
    page_handler.set_page_range(1, 2)
    page_handler.take_shortcut()
    page_handler.handle()


if __name__ == '__main__':
    test()
