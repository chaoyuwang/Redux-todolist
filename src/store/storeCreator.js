import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, REMOVE_LIST_ITEM } from './storeType';

export const getHandleChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getHandleAddTodoList = () => ({
  type: ADD_TODO_LIST
})

export const getRemoveListItem = (index) => ({
  type: REMOVE_LIST_ITEM,
  index
})