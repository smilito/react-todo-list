import React from 'react';
import './todoinput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Test value'};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if(todo.length > 0 ) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="btn btn-primary" onClick={ () => {this.addTodo(this.state.value)}}>Submit</button>
      </div>
    );
  }
}