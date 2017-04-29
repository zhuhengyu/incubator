from NetFictionAnalyser.QdPageHandler import QdPageHandler


def test():
    """
    test function
    :return:
    """
    page_handler = QdPageHandler(order_id=5, style=2)
    page_handler.set_page_range(1, 2)
    page_handler.handle(if_detailed=True, if_print=True)


if __name__ == '__main__':
    test()
