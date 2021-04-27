import React, { useState } from 'react'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message } = e.target.elements
    const details = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    const response = await fetch('/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(details)
    })
    setStatus('Submit')
    const result = await response.json()
    alert(result.status)
  }
  return (

    <form onSubmit={handleSubmit}>

      <div className="form-container">
      <div className="contact-form">
      <div className="name">

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="email">
        <label htmlFor="email"><br/>Email:</label>
        <input type="email" id="email" required />
      </div >
      <div className ="message">
        <label htmlFor="message"><br/>Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
      </div>
      </div>
    </form>

  )
}

export default ContactForm
