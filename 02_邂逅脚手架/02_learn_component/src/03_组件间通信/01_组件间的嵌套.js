import React, { Component } from 'react'

// header
function Header(){
  return(
    <h2>我是header组件</h2>
  )
}


// main
function Main(){
  return(
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}

// banner组件
function Banner(){
  return(
    <h3>我是Banner组件</h3>
  )
}

// productList
function ProductList(){
  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}

// footer
function Footer(){
  return(
    <h2>我是footer组件</h2>
  )
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
