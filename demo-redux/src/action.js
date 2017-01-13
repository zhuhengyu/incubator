/**
 * Create by 欧阳 超 on 2017/01/13
 */

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text,
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index,
  };
}
