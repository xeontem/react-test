import Immutable from 'immutable';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

import Input from './Input';
import TodoList from './TodoList';

import { todosSelector, completedTodosCountSelector } from '../selectors/todos-selectors';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Input addTodo={this.props.addTodo} />
        <TodoList
          todos={this.props.todos}
          doById={this.props.doById}
          undoById={this.props.undoById}
          removeById={this.props.removeById}
        />
        Completed: {this.props.completedTodosCount}
      </div>
    )
  }
}

const AppSelector = createStructuredSelector({
  todos: todosSelector,
  completedTodosCount: completedTodosCountSelector
});

function mapActionsToProps(dispatch) {
  return {
    addTodo: text => dispatch({
      type: 'ADD_TODO',
      payload: text
    }),

    doById: id => dispatch({
      type: 'DO_TODO_BY_ID',
      payload: id
    }),

    undoById: id => dispatch({
      type: 'UNDO_TODO_BY_ID',
      payload: id
    }),

    removeById: id => dispatch({
      type: 'REMOVE_BY_ID',
      payload: id
    }),
  }
}

export default connect(AppSelector, mapActionsToProps)(App);
