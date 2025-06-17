import React from 'react';
import { SkillCard } from '../index';
import { skillCategories } from '../../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-4">
            Skills & Expertise
          </h2>
          <hr className="w-25 mx-auto border-3 border-primary"/>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 