import React from "react";
import { skillSet, otherSkills } from "../../../Data/Data";
import { Row, Col } from "react-bootstrap";
import styles from "../Skills/Skills.module.css";
import useInView from "../../../hooks/useInView";

const SkillBar = ({ label, percentage, filled }) => (
  <>
    <h6>{label}</h6>
    <div className="progressBars">
      <div
        style={{ left: ` calc(${percentage}% - 6%)`, opacity: filled ? 1 : 0 }}
        className="progressBarPercent"
      >
        {percentage}%
      </div>

      <div className="progress">
        <div
          className={`progress-bar`}
          // Held at 0 until the panel scrolls into view, so the bars sweep
          // up to their value instead of being painted already full.
          style={{ width: filled ? `${percentage}%` : 0 }}
          role="progressbar"
          aria-label={label}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </>
);

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={`pb-3  ${styles.skillsSection}`}>
      <div className="pb-3">
        <h3>Technical Skills</h3>
        <Row xs="1" md="1" lg="2">
          {skillSet.map((skill) => {
            return (
              <Col
                key={skill.id}
                className={`pe-4 mb-3  ${styles.technicalSkills}`}
              >
                <SkillBar
                  label={skill.language}
                  percentage={skill.percentage}
                  filled={inView}
                />
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="mt-3">
        <h3>Other Technical Skills</h3>
        <Row xs="1" md="1" lg="2" className="mt-3">
          {otherSkills.map((skill) => {
            return (
              <Col key={skill.id} className="pe-4 pb-5">
                <SkillBar
                  label={skill.tool}
                  percentage={skill.percentage}
                  filled={inView}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
