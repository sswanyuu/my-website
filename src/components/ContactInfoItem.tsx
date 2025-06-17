import React from 'react';
import { ContactInfoItemProps } from '../types';

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ info }) => {
  const { icon, title, content, type, href } = info;

  const renderContent = () => {
    switch (type) {
      case 'email':
        return (
          <a 
            href={href || `mailto:${content}`}
            className="text-decoration-none text-dark"
          >
            {content}
          </a>
        );
      case 'link':
        return (
          <a 
            href={href}
            className="text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      case 'text':
      default:
        return (
          <p className="mb-0">
            {content}
          </p>
        );
    }
  };

  return (
    <div className="col-md-4 mb-4 mb-md-0">
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start">
        <i 
          className={`bi ${icon} text-white me-md-3 mb-2 mb-md-0`}
          style={{ fontSize: '2rem' }}
        ></i>
        <div>
          <h6 className="text-white fw-semibold mb-1">
            {title}
          </h6>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem; 