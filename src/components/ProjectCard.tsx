import React from 'react';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, emoji, description, technologies, features, githubUrl } = project;

  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="card-body p-4">
          {/* Header with title and GitHub link */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title text-dark fw-semibold">
              {emoji && `${emoji} `}{title}
            </h5>
            <a 
              href={githubUrl}
              className="text-decoration-none d-flex align-items-center justify-content-center rounded-circle bg-light p-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              style={{ width: '40px', height: '40px' }}
            >
              <i className="bi bi-github fs-5 text-dark"></i>
            </a>
          </div>
          
          {/* Project description */}
          <p className="card-text text-dark mb-3">
            {description}
          </p>
          
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
          <ul className="list-unstyled">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                <i className="bi bi-check-circle text-secondary me-2"></i>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 