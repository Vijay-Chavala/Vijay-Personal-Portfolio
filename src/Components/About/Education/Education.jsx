import React from "react";
import "./Education.css";
import { academicDetails } from "../../../Data/Data";

const Education = () => {
  return (
    <div>
      <section className="timeline-section">
        <div className="timeline-items">
          {academicDetails.map((eduInfo) => { 
            return (
              <div key={eduInfo.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">{eduInfo.year}</div>
                <div className="timeline-content">
                  <h3>{eduInfo.education}</h3>
                  <p>
                    From{" "}
                    <strong className="fw-bold">{eduInfo.institute}</strong>{" "}
                    with specification
                    <strong className="fw-bold"> {eduInfo.course}</strong>
                  </p>
                  <p>{eduInfo.place}</p>
                  <p className="fw-bold">{eduInfo.percentage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Education;
