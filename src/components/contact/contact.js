import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="message-container">
        <h2>Let's Connect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem at
          nesciunt suscipit. Molestias, soluta voluptatibus. Voluptate velit
          recusandae at amet maiores sit a quasi porro.
        </p>
        <ul className="social-icons">
            <li className="icon"><a href="#" alt='twitter'><i class="fa-brands fa-twitter"></i></a></li>
            <li className="icon"><a href="#" alt='instagram'><i class="fa-brands fa-instagram"></i></a></li>
            <li className="icon"><a href="#" alt='youtube'><i class="fa-brands fa-youtube"></i></a></li>
            <li className="icon"><a href="#" alt='facebook'><i class="fa-brands fa-facebook"></i></a></li>
        </ul>
      </div>
      <div className="contact-form">
        <form action="Submit">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
          <label htmlFor="Email">Email</label>
          <input type="email" id="email" required />
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" id="phone" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button className="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
