from NetFictionAnalyser.QdPageHandler import QdPageHandler


def test():
    """
    test function
    :return:
    """
    page_handler = QdPageHandler(order_id=5, style=2, sleep_range=0.5)
    page_handler.set_page_range(start_page=1, end_page=-1)
    page_handler.take_shortcut(if_print=True, output_file=False)
    # page_handler.handle(if_print=True)
    page_handler.to_db()


if __name__ == '__main__':
    test()
