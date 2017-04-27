import urllib3

http = urllib3.PoolManager(maxsize=20)


def conn_pool():
    """
    return global connection pool
    :return:
    """
    global http
    return http
