import React, { Component } from 'react';

function ChildCpn(props){
  const {name,age,height} = props;
  return(
    <div>
      <h2>{name}{age}{height}</h2>
    </div>
  )
}


export default class App extends Component {
  render() {
    return (
      <div>
        {/*父组件传给子组件的值*/}
        <ChildCpn name='hxxx4' age='18' height='1.88'></ChildCpn>
        <ChildCpn name='ljllll' age='18' height='1.88'></ChildCpn>
      </div>
    )
  }
}
