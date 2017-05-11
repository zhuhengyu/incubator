from pymongo import MongoClient

# getting mongodb client
client = MongoClient('localhost', 27017)
# getting a database
db = client.qidian
# getting a collection
collection = db.fiction


def test():
    print(collection.find_one())


if __name__ == '__main__':
    test()
