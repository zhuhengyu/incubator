/**
 * Created by 欧阳 超 on 2017/01/19
 */

export const API_DATA_BASE = process.env.NODE_ENV === 'production' ? 'http://localhost:4111' : 'http://localhost:9000';

export const API_USER = `${API_DATA_BASE}/data/users`;
