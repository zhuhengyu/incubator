import time
import random

from NetFictionAnalyser.QdPageInfo import QdPageInfo


class QdPageHandler:
    """
    QiDian fiction list page
    """

    def __init__(self, size=-1, sign=-1, tag=-1, chan_id=-1, sub_cate_id=-1, order_id=-1, update=-1, month=-1,
                 style=1, action=-1, vip=-1, sleep_base=1, sleep_range=2):
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
        :param sleep_base: crawler sleep basic time, seconds
        :param sleep_range: crawler sleep range time, seconds
        """
        self.start_page = 1
        self.end_page = 2

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

        # store fiction briefs
        self.pages = []

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

    def set_page_range(self, start_page=1, end_page=1):
        """
        :param start_page: start page number, 1 by default
        :param end_page: end page number, by default is 10
        :return:
        """
        self.start_page = start_page
        self.end_page = end_page

    def handle(self, if_detailed=False, if_print=False):
        """
        get data from start page to end page
        :param if_detailed: if fetch detailed info
        :param if_print: if print to console
        :return:
        """
        for i in range(self.start_page, self.end_page):
            page = QdPageInfo(self.get_url(i))
            self.pages.append(page)
            if if_detailed:
                for brief in page.briefs:
                    time.sleep((self.sleep_base * 100 + self.sleep_range * random.random() * 100) / 100)
                    brief.retrieve()
                    if if_print:
                        print(brief.__dict__)
            if if_print:
                self.print()

    def print(self):
        """
        print all fiction brief info
        :return:
        """
        for page in self.pages:
            for fiction_info in page.briefs:
                print(fiction_info.__dict__)


def test():
    page_handler = QdPageHandler(order_id=5, style=2)
    page_handler.set_page_range(1, 2)
    page_handler.handle()


if __name__ == '__main__':
    test()
