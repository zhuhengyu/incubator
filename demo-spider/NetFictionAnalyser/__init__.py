from NetFictionAnalyser.QdHandler import QdHandler
from NetFictionAnalyser.StatisticsHandler import cat_pie
from NetFictionAnalyser.Conns import conn_db


def test():
    """
    test function
    :return:
    """
    # page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    # page_handler.from_db(if_print=True)
    # cat_pie(page_handler.statistics_cat())
    # page_handler.handle(if_print=True)

    # page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    # page_handler.set_page_range(start_page=1, end_page=-1)
    # page_handler.take_shortcut(if_print=True, output_file=False, from_when=120)
    # # page_handler.handle(if_print=True)
    # page_handler.to_db()

    fictions = [{"id": "1004145821", "retrieveTime": 0, "bookName": "道途之上古练术士", "author": "疯炎", "tags": [],
                 "charCountNow": 997099, "totalClicks": 0, "vipWeekClicks": 0, "totalRecommendations": 0,
                 "vipWeekRecommendations": 0, "category": "仙侠", "subCategory": "神话修真", "updateTime": 1494773280,
                 "selfDefinedTags": [], "authorNovelCount": 0, "authorTotalCharCount": 0, "authorProducingDays": 0},
                {"id": "1009381767", "retrieveTime": 0, "bookName": "变身魔少女", "author": "白兔爱吃萝卜", "tags": [],
                 "charCountNow": 12100, "totalClicks": 0, "vipWeekClicks": 0, "totalRecommendations": 0,
                 "vipWeekRecommendations": 0, "category": "二次元", "subCategory": "变身入替", "updateTime": 1494773280,
                 "selfDefinedTags": [], "authorNovelCount": 0, "authorTotalCharCount": 0, "authorProducingDays": 0}]

    bulk = conn_db().initialize_ordered_bulk_op()
    for fiction in fictions:
        bulk.find({"id": fiction["id"]}).replace_one(fiction)
    bulk.execute()


if __name__ == '__main__':
    test()
