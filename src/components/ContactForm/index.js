import React, {useState} from 'react'
import "./style.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Sent')

  const firstNameRef = useState(null)
  const lastNameRef =  useState(null)
  const emailRef = useState(null)
  const messageRef =  useState(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value
          }
    console.log(data);

  }
  return (
    <div className="contact-me">
      <h2>Get In Touch!</h2>
      <form onSubmit={formStatus}>
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
          Send
        </button>
      </form>
    </div>
  )
}
export default ContactForm