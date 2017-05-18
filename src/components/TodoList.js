import React from 'react';
import ListItem from './ListItem';

export default class TodoList extends React.Component {
  render() {
    const items = this.props.todos.map(todo => (
      <ListItem
        todo={todo}
        key={todo.get('id')}
        doById={this.props.doById}
        undoById={this.props.undoById}
        removeById={this.props.removeById}
      />
    ));
    return (
      <div className="list">
        {items.size ? items : "No todos"}
        <style jsx>{`
          .list {
            border: 1px solid black;
          }
        `}</style>
      </div>
    )
  }
}
