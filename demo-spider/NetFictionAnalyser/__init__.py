from NetFictionAnalyser.QdHandler import QdHandler
from NetFictionAnalyser.StatisticsHandler import cat_pie
from NetFictionAnalyser.Conns import conn_db


def test():
    """
    test function
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.set_page_range(start_page=1, end_page=-1)
    page_handler.take_shortcut(if_print=False, output_file=False, from_when=86400)
    # page_handler.handle(if_print=True)
    page_handler.to_db()


def pie_chart():
    """
    pie chart
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.from_db(if_print=True)
    # page_handler.handle(if_print=True)
    cat_pie(page_handler.statistics_cat())


if __name__ == '__main__':
    # test()
    pie_chart()
