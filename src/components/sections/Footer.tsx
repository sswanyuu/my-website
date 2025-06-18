import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">{t('footer.rights')}</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">Built with React & Bootstrap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
