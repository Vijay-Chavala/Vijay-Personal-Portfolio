import React from "react";
import { skillSet, otherSkills } from "../../../Data/Data";
import { Row, Col } from "react-bootstrap";
import styles from "../Skills/Skills.module.css";
import useInView from "../../../hooks/useInView";

const SkillBar = ({ label, percentage, filled, order }) => (
  <>
    <div className="skillHead">
      <h6>{label}</h6>
      <span className="progressBarPercent" style={{ opacity: filled ? 1 : 0 }}>
        {percentage}%
      </span>
    </div>
    <div className="progressBars">
      <div className="progress">
        <div
          className="progress-bar"
          // Held at 0 until the panel scrolls into view, so the bars sweep
          // up to their value instead of being painted already full. Each
          // bar starts a beat after the one before it.
          style={{
            width: filled ? `${percentage}%` : 0,
            transitionDelay: `${order * 70}ms`,
          }}
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

const SkillGroup = ({ title, items, labelKey, filled, offset = 0 }) => (
  <div className={styles.group}>
    <h3>{title}</h3>
    <Row xs="1" lg="2" className="gx-5">
      {items.map((skill, index) => (
        <Col key={skill.id} className={styles.skill}>
          <SkillBar
            label={skill[labelKey]}
            percentage={skill.percentage}
            filled={filled}
            order={offset + index}
          />
        </Col>
      ))}
    </Row>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={styles.skillsSection}>
      <SkillGroup
        title="Technical Skills"
        items={skillSet}
        labelKey="language"
        filled={inView}
      />
      <SkillGroup
        title="Other Technical Skills"
        items={otherSkills}
        labelKey="tool"
        filled={inView}
        offset={skillSet.length}
      />
    </div>
  );
};

export default Skills;
