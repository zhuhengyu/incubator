import datetime
from bs4 import BeautifulSoup

from NetFictionAnalyser.HttpConn import conn_pool
from NetFictionAnalyser.QdFictionInfo import QdFictionInfo
from NetFictionAnalyser.QdPageHandler import QdPageHandler


class QdPageInfo:
    """
    QiDian page info
    """

    def __init__(self, url_str):
        """
        constructor
        :param url_str: page url
        """
        self.url = url_str
        self.briefs = []

        '''
        start retrieving
        '''
        self.__retrieve()

    def __retrieve(self):
        """

        :return:
        """
        http = conn_pool()
        req = http.request('GET', self.url)

        if req.status == 200:
            soup = BeautifulSoup(req.data.decode('utf-8'), 'html.parser')
            soup_brief_list = soup.select('tr')[1:]
            for soup_brief in soup_brief_list:
                info_parts = soup_brief.select('a')

                # get id
                fiction = QdFictionInfo(id_str=info_parts[2]['data-bid'])

                # get category
                info_part_str = info_parts[0].get_text()
                fiction.category = info_part_str[info_part_str.find('「') + 1:]

                # get sub category
                info_part_str = info_parts[1].get_text()
                fiction.subCategory = info_part_str[:info_part_str.find('」')]

                # get book name
                fiction.bookName = info_parts[2].get_text()

                # get author
                fiction.author = info_parts[4].get_text()

                # get characters count for now
                fiction.charCountNow = soup_brief.select('span')[0].get_text()
                if fiction.charCountNow[-1:] == '万':
                    fiction.charCountNow = float(fiction.charCountNow[:-1]) * 10000
                fiction.charCountNow = int(fiction.charCountNow)

                # get update time
                info_part_str = soup_brief.select('.date')[0].get_text()
                now = datetime.datetime.now()
                if info_part_str.find('今天') != -1:
                    fiction.updateTime = datetime.datetime(now.year, now.month, now.day, int(info_part_str[2:4]),
                                                           int(info_part_str[5:7])).timestamp()
                elif info_part_str.find('昨天') != -1:
                    fiction.updateTime = datetime.datetime(now.year, now.month, now.day, int(info_part_str[2:4]),
                                                           int(info_part_str[5:7])).timestamp() - 86400
                else:
                    fiction.updateTime = datetime.datetime.strptime(info_part_str, "%Y-%m-%d %H:%M:%S").timestamp()

                # push into self.briefs
                print(fiction.__dict__)
                self.briefs.append(fiction)


def test():
    QdPageInfo(QdPageHandler(order_id=5, style=2).get_url())


if __name__ == '__main__':
    test()
