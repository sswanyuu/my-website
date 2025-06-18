import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const currentLang =
    availableLanguages.find(lang => lang.code === currentLanguage) ||
    availableLanguages[0];

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ minWidth: '120px' }}
      >
        <span>{currentLang.flag}</span>
        <span className="d-none d-md-inline">{currentLang.name}</span>
      </button>
      <ul className="dropdown-menu">
        {availableLanguages.map(language => (
          <li key={language.code}>
            <button
              className={`dropdown-item d-flex align-items-center gap-2 ${
                currentLanguage === language.code ? 'active' : ''
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
