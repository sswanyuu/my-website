import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              © 2024 {personalInfo.name}. Made with ❤️ in {personalInfo.location}
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              Built with React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 