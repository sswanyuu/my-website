import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SocialIcon } from '../index';
import { socialLinks } from '../../data/portfolioData';

// Helper function to get correct asset path for GitHub Pages
const getAssetPath = (path: string) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  return `${publicUrl}${path}`;
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div>
              <h1 className="display-4 fw-bold mb-3">{t('hero.greeting')}</h1>
            </div>
            <div>
              <h2 className="h3 text-primary mb-4">{t('hero.title')}</h2>
            </div>
            <div>
              <p className="lead mb-4">{t('hero.location')}</p>
            </div>
            <div>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button
                  variant="primary"
                  size="large"
                  href="#projects"
                  icon="bi-code-square"
                >
                  {t('hero.viewWork')}
                </Button>
                <Button
                  variant="outline"
                  size="large"
                  href="#contact"
                  icon="bi-envelope"
                >
                  {t('hero.getInTouch')}
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
                src={getAssetPath('/yu-profile.jpg')}
                alt={`Olga Shih - Profile`}
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
