import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceCard } from '../index';
import { experiences } from '../../data/portfolioData';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">{t('experience.title')}</h2>
          <hr className="w-25 mx-auto border-3 border-primary" />
          <p className="lead">{t('experience.subtitle')}</p>
        </div>
        <div className="row g-4">
          {experiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
