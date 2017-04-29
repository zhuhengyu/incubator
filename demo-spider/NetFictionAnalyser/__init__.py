from NetFictionAnalyser.QdPageHandler import QdPageHandler


def test():
    """
    test function
    :return:
    """
    page_handler = QdPageHandler(order_id=5, style=2, sleep_range=1)
    page_handler.set_page_range(start_page=1, end_page=-1)
    # page_handler.take_shortcut(if_print=True, output_file=True)
    page_handler.handle(if_detailed=True, if_print=True)


if __name__ == '__main__':
    test()
