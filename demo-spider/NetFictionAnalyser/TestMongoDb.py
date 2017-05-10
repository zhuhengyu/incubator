from pymongo import MongoClient

from NetFictionAnalyser.Conns import conn_db

# getting mongodb client
client = MongoClient('localhost', 27017)
# getting a database
db = client.qidian
# getting a collection
collection = db.fiction


def test():
    print(collection.find_one())
    conn_db().insert_many([{'id': '1006465191', 'retrieveTime': 0, 'bookName': '仙界网店系统', 'author': '新词旧赋', 'tags': [],
                            'charCountNow': 112100, 'totalClicks': 0, 'vipWeekClicks': 0, 'totalRecommendations': 0,
                            'vipWeekRecommendations': 0, 'category': '都市', 'subCategory': '异术超能',
                            'updateTime': 1494427740.0, 'selfDefinedTags': [], 'authorNovelCount': 0,
                            'authorTotalCharCount': 0, 'authorProducingDays': 0},
                           {'id': '1009246104', 'retrieveTime': 0, 'bookName': '都市修仙的日子', 'author': '胶纸', 'tags': [],
                            'charCountNow': 35400, 'totalClicks': 0, 'vipWeekClicks': 0, 'totalRecommendations': 0,
                            'vipWeekRecommendations': 0, 'category': '都市', 'subCategory': '异术超能',
                            'updateTime': 1494427740.0, 'selfDefinedTags': [], 'authorNovelCount': 0,
                            'authorTotalCharCount': 0, 'authorProducingDays': 0},
                           {'id': '1009230342', 'retrieveTime': 0, 'bookName': '综艺娱乐大明星', 'author': '追逐梦想的鱼',
                            'tags': [], 'charCountNow': 103699, 'totalClicks': 0, 'vipWeekClicks': 0,
                            'totalRecommendations': 0, 'vipWeekRecommendations': 0, 'category': '都市',
                            'subCategory': '都市生活', 'updateTime': 1494427740.0, 'selfDefinedTags': [],
                            'authorNovelCount': 0, 'authorTotalCharCount': 0, 'authorProducingDays': 0}])


if __name__ == '__main__':
    test()
