import matplotlib.pyplot as plt
import numpy as np
import datetime

from NetFictionAnalyser.Conns import conn_db

plt.rcParams['font.sans-serif'] = ['SimHei']  # for Chinese characters


# plt.rcParams['axes.unicode_minus'] = False  # for pos neg marks


def cat_pie(fictions_statistics):
    """
    Pie chart, where the slices will be ordered and plotted counter-clockwise
    :param fictions_statistics:
    :return:
    """
    labels = [k for k, v in fictions_statistics]
    sizes = [v for k, v in fictions_statistics]
    explode = [0] * len(labels)

    plt.pie(sizes, explode=explode, labels=labels, colors=get_color_map(14), autopct='%1.1f%%', shadow=False,
            startangle=0, pctdistance=0.9)

    plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    # plt.savefig('test.png')
    plt.show()


def statistics_cat(from_when=86400, to_when=0, base_char_count=0):
    """
    calculate category statistics
    :param from_when:
    :param to_when:
    :param base_char_count:
    :return:
    """
    now = datetime.datetime.now().timestamp()
    from_when = now - from_when
    to_when = now - to_when
    result = {}
    fictions = conn_db().find({
        'updateTime': {'$gt': from_when, '$lt': to_when},
        'charCountNow': {'$gt': base_char_count}
    })
    for fiction in fictions:
        if fiction['category'] not in result:
            result[fiction['category']] = 1
        else:
            result[fiction['category']] += 1
    sorted_keys = sorted(result, key=result.get, reverse=True)
    result = [(k, result[k]) for k in sorted_keys]

    count = 0
    for k, v in result:
        count += v
    print(count)

    return result


def statistics_sub_cat(cat='玄幻'):
    if cat is not None:
        fictions = conn_db().find({
            'category': cat
        })
    else:
        fictions = conn_db().find()
    result = {}
    for fiction in fictions:
        if fiction['subCategory'] not in result:
            result[fiction['subCategory']] = 1
        else:
            result[fiction['subCategory']] += 1
    sorted_keys = sorted(result, key=result.get, reverse=True)
    result = [(k, result[k]) for k in sorted_keys]

    print(result)
    return result


def get_color_map(n):
    """
    Returns a function that maps each index in 0, 1, ... N-1 to a distinct
    RGB color.
    :param n:
    :return:
    """
    # color map
    # http://matplotlib.org/examples/color/colormaps_reference.html
    color_map = plt.get_cmap('Wistia')
    colors = color_map(np.linspace(0, 1, n))
    return colors


if __name__ == '__main__':
    # cat_pie(statistics_cat())
    cat_pie(statistics_sub_cat())
