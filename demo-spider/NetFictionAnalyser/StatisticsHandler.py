import matplotlib.pyplot as plt


# Pie chart, where the slices will be ordered and plotted counter-clockwise:
def cat_pie(fictions_statistics):
    labels = list(fictions_statistics.keys())
    sizes = list(fictions_statistics.values())
    explode = [0 for i in range(0, len(labels))]
    fig1, ax1 = plt.subplots()
    ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', shadow=False, startangle=90)
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.show()
