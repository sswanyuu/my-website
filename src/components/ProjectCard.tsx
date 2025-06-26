import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCardProps } from '../types';
import { Button } from './index';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const { id, githubUrl, technologies, image } = project;


  // Get features array with proper typing
  const features = t(`projects.${id}.features`, {
    returnObjects: true,
  }) as string[];

  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
        {/* Project Image Banner */}
        {image && (
          <div className="position-relative">
            <img
              src={image}
              alt={t(`projects.${id}.title`)}
              className="card-img-top"
              style={{
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              onError={e => {
                console.error(`Failed to load image: ${image}`);
                console.log('Current target src:', e.currentTarget.src);
              }}
              onLoad={() => {
                console.log(`Successfully loaded image: ${image}`);
              }}
            />
            <div className="position-absolute top-0 end-0 p-3">
              <Button
                variant="icon-only"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon="bi-github"
                className="btn-light shadow-sm"
                aria-label={t('projects.viewGithub')}
              />
            </div>
          </div>
        )}

        <div className="card-body p-4">
          {/* Header with title and GitHub link (only show if no image) */}
          {!image && (
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h5 className="card-title fw-semibold">
                {t(`projects.${id}.title`)}
              </h5>
              <Button
                variant="icon-only"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon="bi-github"
                className="btn-outline-secondary"
                aria-label={t('projects.viewGithub')}
              />
            </div>
          )}

          {/* Title when image is present */}
          {image && (
            <h5 className="card-title fw-semibold mb-3">
              {t(`projects.${id}.title`)}
            </h5>
          )}

          {/* Project description */}
          <p className="card-text mb-3">{t(`projects.${id}.description`)}</p>

          {/* Technology badges */}
          <div className="mb-3 d-flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="badge bg-primary px-3 py-2 rounded-pill"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features list */}
          <div className="mb-3">
            <h6 className="fw-semibold mb-2">{t('projects.features')}</h6>
            <ul className="list-unstyled">
              {features.map((feature: string, index: number) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
