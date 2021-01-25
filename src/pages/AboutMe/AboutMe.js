import React from 'react';

/* Assets */
import Banner from '../../assets/webp/banner.webp';

/* Styles */
import './AboutMe.css';

export default props => {
  const { data } = props;
  return (
    <main className="about-me flex-container">
      <section className="about-me-description page flex-container">
        <img
          className="flex-container"
          alt="Derry Nikolai Sucari Aduviri"
          src={ Banner }
          width="300px"
        />
        <p className="flex-container">{ data.information }</p>
      </section>
      <section className="about-me-information page flex-container">
        {/* Tools */}
        <div className="tools-container flex-container">
          <p className="tools-title">{ data.tools.title }</p>
          {
            data.tools.values.map((tool, index) => (
              <p
                key={ index }
                className="tool-value"
              >
                { tool }
              </p>
            ))
          }
        </div>

        {/* Core Skills */}
        <div className="core-skills-container flex-container">
          <p className="core-skills-title">{ data.coreSkills.title }</p>
          {
            data.coreSkills.values.map((coreSkill, index) => (
              <p
                key={ index }
                className="coreSkill-value"
              >
                { coreSkill }
              </p>
            ))
          }
        </div>

        {/* Qualities */}
        <div className="qualities-container flex-container">
          <p className="qualities-title">{ data.qualities.title }</p>
          {
            data.qualities.values.map((quality, index) => (
              <p
                key={ index }
                className="quality-value"
              >
                { quality }
              </p>
            ))
          }
        </div>

        {/* Languages */}
        <div className="languages-container flex-container">
          {
            data.languages.map((language, index) => (
              <p key={ index }>{ language }</p>
            ))
          }
        </div>
      </section>
    </main>
  );
}