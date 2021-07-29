import React, { Component } from 'react'

class Cpn extends Component{
  render(){
    return(
      <div>我是Cpn组件</div>
    )
  }
  componentWillUnmount(){
    console.log('我被卸载了')
  }
}

export default class App extends Component {
  constructor(){
    super();
    console.log('执行了constructor的方法')
    this.state = {
      count: 0,
      isShow:true
    }
  }
  render() {
    console.log('执行了render方法')
    return (
      <div>
        我是App组件
        <h2>当前计数：{this.state.count}</h2>
        <button onClick = {()=>this.changeCount('0')}>-1</button>
        <button onClick = {()=>this.changeCount('1')}>+1</button>
        <hr/>
        <button onClick={()=>this.changeShow()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }
  componentDidMount(){
    console.log('执行了componentDidMount方法')
  }
  changeCount(flag){
    let newCount = this.state.count;
    flag==='0'?newCount = newCount -1 : newCount = newCount+1
    this.setState({
      count: newCount
    })
  }
  componentDidUpdate(){
    console.log('执行了componentDidUpdate方法')
  }
  changeShow(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

