import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
   <section className="contact">
      <form className="contact-form">

        <input type="text" className="name" placeholder='Name' />
        <input type="text" className="email" placeholder='Email' />
        <input type="text" className="subject" placeholder='Subject' />
<textarea name="comment"className='textarea' placeholder='comment'>

</textarea>
<button type='submit' className="submit">Submit</button>
<img src="" alt="" className="contact-us-img" />
      </form>

<img src="https://wallpapercave.com/wp/wp4111999.jpg" alt="background" className="background-contact" />
   </section>
  )
}

export default Contact