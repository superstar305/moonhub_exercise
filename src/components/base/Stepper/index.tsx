import React, { FC } from "react";
import "./index.scss";

interface StepperProps {
  title: string;
  content: string[];
}

const Stepper: FC<StepperProps> = ({ title, content }) => {
  return (
    <div className="Stepper-wrapper">
      <h4 className="Stepper-title">{title}</h4>
      <ol className="Stepper-stepper">
        {content.map((item) => (
          <li className="Stepper-stepper-item">
            <img className="Stepper-stepper-logo" src="./company_logo.png" />
            <p className="Stepper-stepper-content">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Stepper;
