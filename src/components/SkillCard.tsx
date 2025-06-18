import React from 'react';
import { useTranslation } from 'react-i18next';
import { SkillCardProps } from '../types';

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const { t } = useTranslation();
  const { title, icon, skills } = category;

  // Map the title to translation keys
  const getTitleKey = (title: string) => {
    if (title.includes('Frontend')) return 'skills.categories.frontend';
    if (title.includes('Tools')) return 'skills.categories.tools';
    if (title.includes('Backend')) return 'skills.categories.backend';
    return '';
  };

  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="card-body text-center p-4">
          <i
            className={`bi ${icon} text-primary mb-4`}
            style={{ fontSize: '3rem' }}
          ></i>

          <h5 className="card-title fw-semibold mb-4">
            {t(getTitleKey(title))}
          </h5>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-primary px-3 py-2 rounded-pill fw-medium text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
