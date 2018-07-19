import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const ContactPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="contact-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Contact Me!</h1>
        <div className="contact-wrapper">
          <div className="contact-content" style={{ color: textPrimary }}>
            <p>
            <i class="far fa-envelope"></i>  Email: <span className="highlight">allisaliberto@gmail.com</span> 
            </p>
            <p>
            <i class="fas fa-phone"></i>  Phone: <span className="highlight">760.585.5358</span>.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
            </p>
          </div>
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

ContactPage.contextTypes = {
  theme: PropTypes.any
};

export default ContactPage;
