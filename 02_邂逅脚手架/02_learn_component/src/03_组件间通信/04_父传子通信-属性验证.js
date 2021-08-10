import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ChildCpn(props){
  const {age,height,name} = props;
  const {names} = props;
  return(
    <div>
      <h2>{name}-{age}-{height}</h2>
      <div>
        {names.map((item,index)=>{
          return (<li>{item}-{index}</li>)
        })}
      </div>
    </div>
  )
}


// 属性验证
ChildCpn.propTypes = {
  // 设置必传项
  name: PropTypes.string.isRequired,
  height: PropTypes.number,
  names: PropTypes.array
}

// 设置传递的默认值
ChildCpn.defaultProps = {
  name:'hxxx',
  age: 100,
  names:['1','2','3']
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/*父组件传给子组件的值*/}
        <ChildCpn name={'hxxx4'} height={1.88} names={['abc','cba','mba','nba']}></ChildCpn>
        <ChildCpn name={'ljllll'} age={40} height={1.78} names={['cba','abc','zzz','nba']}></ChildCpn>
      </div>
    )
  }
}
