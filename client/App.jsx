import React, { Component } from 'react'
import NavBar from './navbar.jsx'
// import { getById } from './utility/api-tools.js'

// The Entire Application
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { gameData: '' }
  }

  // componentDidMount() {
  //   // Example of use the api-utility in react
  //   getById('test/testdbAPI', 1, this.success, this.fail)
  // }

  // // Using Arrow syntax caches the 'this' of the component
  // success = (data) => {
  //   console.log('OPE')
  //   console.log(data)
  //   this.setState({ gameData: data })
  // }

  // fail = (error) => {
  //   alert('FAIL')
  // }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div class="text-center">
          <h1>Sorry!</h1>
          <p style={{color:'white'}}>
            This website is currently under construction. We are working hard to create a better 
            experience for you all. Thank you for your patience! :)
            <br/>-Web Arcade Dev Team
          </p>
          </div>
      </div>
    );
  }
}
