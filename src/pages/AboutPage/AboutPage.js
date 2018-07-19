import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';
import headshot from '../../images/headshot.jpg';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
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
        <h1 style={{ color: colorPrimary }}>About Me...</h1>
        <img src={headshot} className="rounded-circle img-fluid" alt="head shot pic" />
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
            I am an ambitious, creative, and resourceful full stack web developer who is driven to continuously learn new technologies and creative skills. I have mutlifaceted background in customer service, photography, and entrepreneurship that has given me a strong ability to communicate effectively and multitask like a master. I've recently completed an intensive 24 week coding bootcamp in which I gained more inspiration and knowledge than my brain thought possible. 
            </p>
            <p>
            Beyond technology I am a mother to a feisty daughter, a foodie, and music critic. In my free time you  might find me hiking, reading, learning new languages or expanding on previous knowledge, as well as exploring this wide world we all call home, or trying out my two left feet dancing. 
            </p>
            <p>
            Technologies: Node.js, JavaScript, jQuery, GitHub, MySQL, Firebase, HTML5, CSS3, Bootstrap, APIs, JSON, AJAX, CLI, MongoDB, Express, React.js, PHP, Python, Agile Development, Adobe Creative Suite.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
            (づ｡◕‿‿◕｡)づ
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
