import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyPress = (e) => {
      if (e.nativeEvent.keyCode === 13) {
        this.props.addTodo(e.target.value);
        e.target.value = '';
      }
    }
  }

  render() {
    return (
      <div className="header">
        <input type="text" onKeyPress={this.onKeyPress} />

        <style jsx>{`
          .header {
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
          }

          input {
            padding: 10px;
            width: 80%;
          }
        `}</style>
      </div>
    )
  }
}
