import React, { Component } from "react";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
import store from "../../redux/store";
export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.asyncIncrement}>异步加</button>
        <button></button>
      </div>
    );
  }
}
