import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState( state => ({
      message: "I have been clicked"
    })
    )
  }

  render() {
    return (
      <div id="todo">
        TODO:
        <TodoSubmit />     
      </div>
    )
  }
}

class TodoSubmit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      actions: [],
      listItems: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
    this.delete = this.delete.bind(this)
  }

  delete(id) {
    var array = [...this.state.actions]; 
    var index = array.indexOf(id) 
    array.splice(index, 1);
    this.setState({actions: array});
  }


  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState({
      value: '',
      actions: [...this.state.actions, this.state.value], 
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          action 
        <input value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/> 
          <ul>
            {this.state.actions.map( (action) => <li key={action.toString()}> <Action action={action} handleDelete={this.delete} /> </li>)}
         </ul>
      </form>
    )
  }
}

class Action extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
    this.action = this.props.action
  }

  delete() {
    this.props.handleDelete(this.action)
  }

  render() {
    return(
      <div class="task">
        <div className="actionName">{this.action}</div>
        <div class="x" onClick={this.delete}>&times;</div> 
      </div> 
      )
  }
}