import time
import datetime
import urllib3
from bs4 import BeautifulSoup

# static variable, connection pool
http = urllib3.PoolManager(maxsize=10)


class QdFictionInfo:
    """
    QiDian novel info class
    """

    def __init__(self, url):
        """
        constructor
        :param url: novel url
        """
        # novel url
        self.url = url
        # retrieving timestamp
        self.retrieveTime = 0

        # book name
        self.bookName = ''
        # author
        self.author = ''
        # tags
        self.tags = []
        # character count for now
        self.charCountNow = 0
        # total clicks
        self.totalClicks = 0
        # VIP week clicks
        self.vipWeekClicks = 0
        # total recommendations
        self.totalRecommendations = 0
        # vip week recommendations
        self.vipWeekRecommendations = 0

        # category
        self.category = ''
        # sub category
        self.subCategory = ''

        # updating timestamp
        self.updateTime = 0

        # self defined tags
        self.selfDefinedTags = []

        # novel numbers the author has done
        self.authorNovelCount = 0
        # total character numbers the author has typed
        self.authorTotalCharCount = 0
        # day numbers author has been producing
        self.authorProducingDays = 0

        '''
        start analysing
        '''
        self.__analysis()

    def __analysis(self):
        """
        get and analysis raw html
        :return:
        """
        global http
        self.retrieveTime = time.time()
        req = http.request('GET', self.url)
        if req.status == 200:
            soup = BeautifulSoup(req.data.decode('utf-8'), 'html.parser')

            # HTML book info block
            soup_book_info = soup.select('.book-info')[0]
            # get book name
            self.bookName = soup_book_info.select('em')[0].get_text()
            # get author
            self.author = soup_book_info.select('.writer')[0].get_text()
            # get tags
            self.tags = soup_book_info.select('.tag')[0].get_text().split('\n')
            self.tags = list(filter(None, self.tags))
            # get character count for now
            self.charCountNow = float(soup_book_info.select('em')[1].get_text())
            if soup_book_info.select('cite')[0].get_text() == '万字':
                self.charCountNow *= 10000
            self.charCountNow = int(self.charCountNow)
            # get total clicks
            self.totalClicks = float(soup_book_info.select('em')[2].get_text())
            if soup_book_info.select('cite')[1].get_text()[0] == '万':
                self.totalClicks *= 10000
            self.totalClicks = int(self.totalClicks)
            # get vip week clicks
            temp_str_week_clicks = soup_book_info.select('cite')[1].get_text()
            self.vipWeekClicks = temp_str_week_clicks[temp_str_week_clicks.find('会员周点击') + 5:]
            if self.vipWeekClicks[-1:] == '万':
                self.vipWeekClicks = float(self.vipWeekClicks[:-1])
                self.vipWeekClicks *= 10000
            self.vipWeekClicks = int(self.vipWeekClicks)
            # get total recommendations
            self.totalRecommendations = float(soup_book_info.select('em')[3].get_text())
            if soup_book_info.select('cite')[2].get_text()[0] == '万':
                self.totalRecommendations *= 10000
            self.totalRecommendations = int(self.totalRecommendations)
            # get vip week recommendations
            temp_str_week_recommendations = soup_book_info.select('cite')[2].get_text()
            self.vipWeekRecommendations = temp_str_week_recommendations[temp_str_week_recommendations.find('周') + 1:]
            if self.vipWeekRecommendations[-1:] == '万':
                self.vipWeekRecommendations = float(self.vipWeekRecommendations[:-1])
                self.vipWeekRecommendations *= 10000
            self.vipWeekRecommendations = int(self.vipWeekRecommendations)

            # HTML category block
            soup_crumbs_nav = soup.select('.crumbs-nav')[0]
            # get category
            self.category = soup_crumbs_nav.select('a')[1].get_text()
            # get sub category
            self.subCategory = soup_crumbs_nav.select('a')[2].get_text()

            # HTML last chapter block
            self.updateTime = soup.select('.volume')[-1].select('li')[-1].select('a')[0]['title'][5:24]
            self.updateTime = time.mktime(datetime.datetime.strptime(self.updateTime, "%Y-%m-%d %H:%M:%S").timetuple())

            # HTML self defined info block
            soup_self_tags = soup.select('.tag-wrap')[0].select('.tags')
            self.selfDefinedTags = [tag.get_text() for tag in soup_self_tags]

            # HTML author info block
            soup_work_state = soup.select('.work-state')[0]
            # get author novel count
            self.authorNovelCount = int(soup_work_state.select('em')[0].get_text())
            # get total character number the author has typed
            temp_str_total_char_count = soup_work_state.select('em')[1].get_text()
            if temp_str_total_char_count[-1:] == '万':
                self.authorTotalCharCount = float(temp_str_total_char_count[:-1])
                self.authorTotalCharCount *= 10000
            self.authorTotalCharCount = int(self.authorTotalCharCount)
            # get day numbers author has been producing
            self.authorProducingDays = int(soup_work_state.select('em')[2].get_text())


if __name__ == '__main__':
    # novel = QdNovelInfo('http://book.qidian.com/info/1005235019')
    novel = QdFictionInfo('http://book.qidian.com/info/1005207298')

    print(novel.__dict__)
