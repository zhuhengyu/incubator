from NetFictionAnalyser.QdHandler import QdHandler
import json


def test():
    """
    test function
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.from_db()
    page_handler.handle(if_print=True)

    # page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    # page_handler.set_page_range(start_page=1, end_page=-1)
    # page_handler.take_shortcut(if_print=True, output_file=False, from_when=120)
    # # page_handler.handle(if_print=True)
    # page_handler.to_db()

    # temp = "{'id': '1008865464', 'retrieveTime': 1494776994.711978, 'bookName': '三国逸士', 'author': '流风逐云', " \
    #        "'tags': ['连载', '免费', '历史', '秦汉三国'], 'charCountNow': 15700, 'totalClicks': 39, 'vipWeekClicks': 7, " \
    #        "'totalRecommendations': 1, 'vipWeekRecommendations': 1, 'category': '历史频道', 'subCategory': '秦汉三国', " \
    #        "'updateTime': 1494773375.0, 'selfDefinedTags': [], 'authorNovelCount': 1, 'authorTotalCharCount': 15700, " \
    #        "'authorProducingDays': 8}"
    # print(json.loads(temp.replace("'", '"')))


if __name__ == '__main__':
    test()
