import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialIcon, ContactInfoItem } from '../index';
import { contactInfo, socialLinks } from '../../data/portfolioData';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">{t('contact.title')}</h2>
          <hr className="w-25 mx-auto border-3 border-dark" />
          <p className="lead">{t('contact.subtitle')}</p>
        </div>

        <div className="row g-4 mb-5 justify-content-center">
          {contactInfo.map((info, index) => (
            <ContactInfoItem key={index} info={info} />
          ))}
        </div>

        <div className="text-center">
          <h5 className="mb-4">{t('contact.connect')}</h5>
          <div className="d-flex justify-content-center gap-3">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                platform={social.platform}
                url={social.url}
                icon={social.icon}
                variant="large"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
