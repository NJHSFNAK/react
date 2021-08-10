import React, { Component } from 'react'

class ChildCpn extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <button onClick = {()=> this.decrement()}>-</button>
        <button onClick = {()=> this.increment()}>+</button>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>当前计数：{count}</h2>
        <ChildCpn btnClick={this.increment()}/>
      </div>
    )
  }
  increment(){
    let {count} = this.state;
    this.setState({
      count: count + 1
    })
  }
  decrement(){
    let {count} = this.state;
    this.setState({
      count: count - 1
    })
  }
}
