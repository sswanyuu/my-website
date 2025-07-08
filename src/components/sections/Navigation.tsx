import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavItem } from '../index';
import ThemeToggle from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm position-fixed w-100"
      style={{ zIndex: 1000 }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#home">
          Olga Shih
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <NavItem href="#home">{t('navigation.home')}</NavItem>
            <NavItem href="#about">{t('navigation.about')}</NavItem>
            <NavItem href="#experience">{t('navigation.experience')}</NavItem>

            <NavItem href="#projects">{t('navigation.projects')}</NavItem>
            <NavItem href="#skills">{t('navigation.skills')}</NavItem>
            <NavItem href="#contact">{t('navigation.contact')}</NavItem>
          </ul>
          <div className="d-flex gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
