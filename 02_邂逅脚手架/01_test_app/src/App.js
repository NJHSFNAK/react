import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render(){
    const {count} = this.state;
    return(
      <div>
        <h2>{count}</h2>
        <button onClick={()=>this.changeCount('0')}>-1</button>
        <button onClick={()=>this.changeCount('1')}>+1</button>
      </div>
    )
  }
  changeCount(flag){
    let newCount = this.state.count;
    flag === '0'? newCount=newCount - 1: newCount = newCount+1;
    this.setState({
      count: newCount
    })
  }
}

export default App;