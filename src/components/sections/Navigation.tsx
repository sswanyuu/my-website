import React from 'react';
import { NavItem } from '../index';
import { personalInfo } from '../../data/portfolioData';
import ThemeToggle from '../ThemeToggle';

const Navigation: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm position-fixed w-100"
      style={{ zIndex: 1000 }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#home">
          {personalInfo.name}
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
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
