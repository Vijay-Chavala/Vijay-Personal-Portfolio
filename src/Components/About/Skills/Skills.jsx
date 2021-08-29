import React from "react";
import { skillSet, otherSkills } from "../../../Data/Data";
import { Row, Col } from "react-bootstrap";
import styles from "../Skills/Skills.module.css";
const Skills = ({ tabKey, keyValue }) => {
  return (
    <div className={`pb-3  ${styles.skillsSection}`}>
      <div className="pb-3">
        <h3>Technical Skills</h3>
        <Row xs="1" md="1" lg="2">
          {skillSet.map((skill) => {
            return (
              <Col
                key={skill.id}
                className={`pe-4 mb-3  ${styles.technicalSkills}`}
              >
                <h6>{skill.language}</h6>
                <div className="progressBars">
                  <div
                    style={{
                      left: ` calc(${skill.percentage}% - 6%)`,
                    }}
                    className="progressBarPercent"
                  >
                    {skill.percentage}%
                  </div>

                  <div className="progress">
                    <div
                      className={`progress-bar`}
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="50"
                    ></div>
                  </div>
                </div>
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
                <h6>{skill.tool}</h6>
                <div className="progressBars">
                  <div
                    style={{ left: ` calc(${skill.percentage}% - 6%)` }}
                    className="progressBarPercent"
                  >
                    {skill.percentage}%
                  </div>
                  <div className="progress">
                    <div
                      className={`progress-bar`}
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="50"
                    ></div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
