import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from '../../store'
import { getHandleChangeInputValue, getHandleAddTodoList, getRemoveListItem } from '../../store/storeCreator'

class TodoList extends Component {
  constructor(prop){
    super(prop);
    this.state = store.getState();
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleChangeStore = this.handleChangeStore.bind(this);
    this.handleRemoveListItem = this.handleRemoveListItem.bind(this);
    store.subscribe(this.handleChangeStore);
  }
  handleChangeStore(){
    this.setState(store.getState());
  }
  handleChangeInputValue(e){
    const action = getHandleChangeInputValue(e.target.value);
    store.dispatch(action)
  }
  handleAddSubmit(){
    const action = getHandleAddTodoList();
    store.dispatch(action)
  }
  handleRemoveListItem(index){
    const action = getRemoveListItem(index);
    store.dispatch(action)
  }
  render(){
    return(
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChangeInputValue = {this.handleChangeInputValue}
        handleAddSubmit = {this.handleAddSubmit}
        handleRemoveItem = {this.handleRemoveListItem}
      />
    )
  }
}

export default TodoList;