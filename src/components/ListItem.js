import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => {
      const isCompleted = this.props.todo.get('done');
      const id = this.props.todo.get('id');

      if (isCompleted) {
        this.props.undoById(id);
      } else {
        this.props.doById(id);
      }
    }
  }

  render() {
    const isCompleted = this.props.todo.get('done');
    const id = this.props.todo.get('id');

    return (
      <div className="list-item">
        <input type="checkbox" checked={isCompleted} onChange={this.toggle} />
        <div>{this.props.todo.get('text')}</div>
        <button onClick={() => this.props.removeById(id)}>Remove</button>
        <style jsx>{`
          .list-item {
            display: flex;
            padding: 10px;
            align-items: center;
            border: 1px solid black;
            justify-content: space-between;
          }

          input[type="checkbox"] {
            margin-right: 5px;
          }

          input[type="checkbox"]:checked + div {
            text-decoration: line-through;
            color: silver;
          }

          button {

          }
        `}</style>
      </div>
    )
  }
}
