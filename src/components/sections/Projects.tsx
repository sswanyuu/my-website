import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../index';
import { projects } from '../../data/portfolioData';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">{t('projects.title')}</h2>
          <hr className="w-25 mx-auto border-3 border-primary" />
        </div>
        <div className="row g-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
