import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import contact from '../assets/contact.png';
import './contactForm.css';
import SocialIcons from './SocialIcons';


function ContactForm() {
 
  const [state, handleSubmit] = useForm("xeqbnqqn");
  if (state.succeeded) {
      return <p className="contact__form_text section__padding">Thanks for your message, we will attend to your message as soon as possible!</p>;
  }
  return (
    <div className='app__contact-form section__padding'>
    <div className="contact__form-container " >
    <h2>Get in <span>Touch</span></h2>
    <p>Send an Email. We'll be in touch.</p>
      <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      <input
      required
        id="name"
        type="name" 
        name="name"
        placeholder="Your Name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
      required
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input
    
        id="subject"
        type="subject" 
        name="subject"
        placeholder="Subject"
      />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
      <textarea
      required
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    <div className='contact__form-image'>
<img src={contact} alt="contact-image" />
<div className='contact__form-social_icons'>
<div className='contact__form-text'>
    <h4>Connect With Us On These Social Media Platforms. </h4>
    </div>
<SocialIcons />
<div className='contact__form-socialIcons-text'>
<h4>We Will Love To Hear From You Today!</h4>

</div>
</div>
</div>
    </div>
  );
}
export default ContactForm;