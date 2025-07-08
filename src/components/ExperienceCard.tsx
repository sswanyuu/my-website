import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceCardProps } from '../types';
import { Button } from './index';

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { t } = useTranslation();
  const {
    id,
    company,
    position,
    duration,
    location,
    type,
    technologies,
    website,
  } = experience;

  // Get achievements from translation files
  const achievements = t(`experience.${id}.achievements`, {
    returnObjects: true,
  }) as string[];

  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="card-body p-4">
          {/* Header with company and website link */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="card-title fw-bold text-primary mb-1">
                {company}
              </h5>
              <h6 className="card-subtitle text-muted mb-2">{position}</h6>
            </div>
            {website && (
              <Button
                variant="icon-only"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                icon="bi-box-arrow-up-right"
                className="btn-outline-secondary"
                aria-label={t('experience.visitWebsite')}
              />
            )}
          </div>

          {/* Duration and location */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-secondary px-3 py-2 rounded-pill">
              <i className="bi bi-calendar-event me-1"></i>
              {duration}
            </span>
            <span className="badge bg-secondary px-3 py-2 rounded-pill">
              <i className="bi bi-geo-alt me-1"></i>
              {location}
            </span>
            <span className={`badge bg-secondary px-3 py-2 rounded-pill`}>
              <i className="bi bi-briefcase me-1"></i>
              {t(`experience.types.${type}`)}
            </span>
          </div>

          {/* Achievements */}
          <div className="mb-3">
            <h6 className="fw-semibold mb-2">{t('experience.achievements')}</h6>
            <ul className="list-unstyled">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-2 small">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h6 className="fw-semibold mb-2">{t('experience.technologies')}</h6>
            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="badge bg-primary px-3 py-2 rounded-pill"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
