
import React, { Component } from 'react'
import ContactForm from './ContactForm'
class Contact extends Component {
  render () {
    return (
      <div className='Contact'>
      <img id='banner' src='images/banner/tetris_banner.png'/>
      <h1>Please send us feedBack</h1>
      <ContactForm/>
      </div>
    )
  }
}
export default Contact
