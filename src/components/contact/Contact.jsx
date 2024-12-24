import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("HIIIIIIIIIII");
    console.log(import.meta.env.VITE_SERVICE);
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_KEY  })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact container section" id='contact'>
    <h2 className="section__title">Get in Touch</h2>

    <div className="contact__container grid">
      <div className="contact__info">
        <h3 className="contact__title">Let's Talk about Everything!</h3>
        <p className="contact__details">Don't like forms? Send me an email. 👋</p>
      </div>

      <form ref={form} className="contact__form" onSubmit={sendEmail}>
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input type="text" className="contact__form-input"
              placeholder='Insert Your Name' name="user_name" required />
          </div>

          <div className="contact__form-div">
            <input type="email" className="contact__form-input"
              placeholder='Insert Your Email' name="user_email" required />
          </div>
        </div>

        <div className="contact__form-div">
          <input type="text" className="contact__form-input"
            placeholder='Insert Your Subject' name='user_subject' required />
        </div>

        <div className="contact__form-div contact__form-area ">
          <textarea name="message" id="" cols="30" rows="10"
            className='contact__form-input' 
            placeholder='Write Your Message'  required></textarea>
        </div>

        <button className="btn" type="submit" value="Send">Send Message</button>
      </form>
    </div>
  </section>
  );

  // <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>



  // )
}

export default Contact
