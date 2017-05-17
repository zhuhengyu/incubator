import matplotlib.pyplot as plt
import datetime

from NetFictionAnalyser.Conns import conn_db


def cat_pie(fictions_statistics):
    """
    Pie chart, where the slices will be ordered and plotted counter-clockwise
    :param fictions_statistics:
    :return:
    """
    labels = list(fictions_statistics.keys())
    sizes = list(fictions_statistics.values())
    explode = [0 for i in range(0, len(labels))]
    fig1, ax1 = plt.subplots()
    ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', shadow=False, startangle=90)
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.show()


def statistics_cat(from_when=86400):
    """
    calculate category statistics
    :return:
    """
    now = datetime.datetime.now().timestamp()
    from_when = now - from_when
    result = {}
    fictions = conn_db().find({'updateTime': {'$gt': from_when}})
    for index, fiction in enumerate(fictions):
        print(index)
        if fiction['category'] not in result:
            result[fiction['category']] = 1
        else:
            result[fiction['category']] += 1
    return result
