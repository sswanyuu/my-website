import React from 'react';
import { Button, SocialIcon } from '../index';
import { personalInfo, socialLinks } from '../../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div>
              <h1 className="display-4 fw-bold mb-3">
                Hello! I'm {personalInfo.name}
              </h1>
            </div>
            <div>
              <h2 className="h3 text-primary mb-4">{personalInfo.title}</h2>
            </div>
            <div>
              <p className="lead mb-4">Based in {personalInfo.location}</p>
            </div>
            <div>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button
                  variant="primary"
                  size="large"
                  href="#projects"
                  icon="bi-code-square"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="large"
                  href="#contact"
                  icon="bi-envelope"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={index}
                    platform={social.platform}
                    url={social.url}
                    icon={social.icon}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div
              className="ratio ratio-1x1 mx-auto rounded-circle overflow-hidden shadow"
              style={{ maxWidth: '300px' }}
            >
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Profile`}
                className="object-fit-cover w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
