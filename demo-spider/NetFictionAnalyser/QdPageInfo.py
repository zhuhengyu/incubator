
class BriefInfo:
    """
    fiction brief info on QiDian page
    """

    def __init__(self, id_str, category, sub_category, book_name, char_count_now, author, update_time):
        """
        constructor
        :param id_str: fiction id
        :param category: category
        :param sub_category: sub category
        :param book_name: book name
        :param char_count_now: total characters for now
        :param author: author
        :param update_time: update time
        """
        self.id = id_str
        self.category = category
        self.subCategory = sub_category
        self.bookName = book_name
        self.charCountNow = char_count_now
        self.author = author
        self.updateTime = update_time
