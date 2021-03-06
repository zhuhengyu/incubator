from NetFictionAnalyser.QdHandler import QdHandler
from NetFictionAnalyser.StatisticsHandler import cat_pie
from NetFictionAnalyser.StatisticsHandler import statistics_cat
from NetFictionAnalyser.StatisticsHandler import statistics_sub_cat
from NetFictionAnalyser.Conns import conn_db


def test():
    """
    test function
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.set_page_range(start_page=1, end_page=-1)
    # page_handler.take_shortcut(if_print=True, output_file=False)
    page_handler.take_shortcut(if_print=True, output_file=False, from_when=864000)
    # page_handler.handle(if_print=True)
    page_handler.to_db()


def pie_chart():
    """
    pie chart
    :return:
    """
    page_handler = QdHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.from_db(if_print=False)
    # page_handler.handle(if_print=True)
    # cat_pie(statistics_cat(from_when=300000, to_when=220000, base_char_count=5000))
    # cat_pie(statistics_cat(from_when=86400))
    cat_pie(statistics_sub_cat(cat='二次元'))
    # cat_pie(statistics_cat(from_when=172800, to_when=86400))


if __name__ == '__main__':
    # test()
    pie_chart()
