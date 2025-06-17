import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <hr className="w-25 mx-auto mb-5 border-3 border-primary" />
            <p className="lead">{personalInfo.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
