import urllib3


def conn_pool():
    """
    static variable, connection pool
    :return:
    """
    http = urllib3.PoolManager(maxsize=20)
    return http
