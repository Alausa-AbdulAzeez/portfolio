import React, { useRef } from "react";
// import emailjs from '@emailjs/browser'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_lfwmdvk',
  //       'template_ckif3mn',
  //       form.current,
  //       'BBwcDxxrq9VEFh-gY'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         e.target.reset()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>alausaabdulazeez@gmail.com</h5>
            <a
              href="mailto:alausaabdulazeez@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348118487185</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348118487185"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            required
            placeholder='Your Message'
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
