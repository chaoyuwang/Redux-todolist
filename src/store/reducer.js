import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, REMOVE_LIST_ITEM } from './storeType';
const defaultState = {
  inputValue: '111',
  list: [1,2,3]
}

export default (state=defaultState, action) => {
  switch (action.type){
    case CHANGE_INPUT_VALUE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    case ADD_TODO_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue='';
      return newState;
    }
    case REMOVE_LIST_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      return newState;
    }
    default: break;
  }
  return state;
}