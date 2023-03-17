import React from 'react'
import "./style.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact-me">
      <h2>Get In Touch!</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input className="form-control" type="text" id="name" placeholder ="Your name" required />
        </div>
        <div>
          <input className="form-control" type="email" id="email" placeholder ="Your email address" required />
        </div>
        <div>
          <textarea className="form-control" id="message" placeholder ="Your message" required />
        </div>
        <button className="submit-button" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm