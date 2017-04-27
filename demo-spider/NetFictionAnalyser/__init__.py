from NetFictionAnalyser.QdFictionInfo import QdFictionInfo


def test():
    """
    test function
    :return:
    """
    novel = QdFictionInfo('1005235019')
    # novel = QdFictionInfo('http://book.qidian.com/info/1005207298')

    print(novel.__dict__)


if __name__ == '__main__':
    test()
