import React, { Component } from 'react';

class ChildCpn extends Component{
  constructor(props){
    super(props);
  }
  render() {
    // 解构props中的值
    const {name,age,height} = this.props;
    return (
      <h2>子组件展示的数据：{name+" "+age+" "+height}</h2>
    )
  }
}



export default class App extends Component {
  render() {
    return (
      <div>
        {/*父组件传给子组件的值*/}
        <ChildCpn name='hxxxx' age='18' height='1.88'></ChildCpn>
        <ChildCpn name='ljllll' age='18' height='1.88'></ChildCpn>
      </div>
    )
  }
}
