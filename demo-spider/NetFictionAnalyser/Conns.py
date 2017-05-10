import urllib3
from pymongo import MongoClient

#
http = urllib3.PoolManager(maxsize=20)


def conn_pool():
    """
    return global connection pool
    :return:
    """
    global http
    return http


# getting mongodb client
client = MongoClient('localhost', 27017)
# getting a database
db = client.qidian
# getting a collection
collection = db.fiction


def conn_db():
    global collection
    return collection
