import matplotlib.pyplot as plt
import numpy as np
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
    ax1.pie(sizes, explode=explode, labels=labels, colors=get_color_map(14), autopct='%1.1f%%', shadow=False,
            startangle=90)
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
    for fiction in fictions:
        if fiction['category'] not in result:
            result[fiction['category']] = 1
        else:
            result[fiction['category']] += 1
    return result


def get_color_map(n):
    """
    Returns a function that maps each index in 0, 1, ... N-1 to a distinct
    RGB color.
    :param n:
    :return:
    """
    # color map
    # jet viridis
    color_map = plt.get_cmap('viridis')
    colors = color_map(np.linspace(0, 1, n))
    return colors
