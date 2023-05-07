
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>Premium</li>
            <li>Team Plan</li>
            <li>Request a Demo</li>
          </ul>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <ul>
            <li>Tools and Videos</li>
            <li>Educational Courses</li>
          </ul>
        </div>

        <div className="social-media">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a><a href="#">
            <i className="fab fa-facebook"></i></a><a href="#">
              <i className="fab fa-twitter"></i></a><a href="#">
                <i className="fab fa-instagram"></i></a></div></div><hr /><div className="footer-bottom"><p>Privacy Policy | Terms of Service | Copyright Policy | Courtesy of OcrAI</p></div></footer>);
}

export default Footer;
