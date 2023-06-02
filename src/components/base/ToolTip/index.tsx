import React, { FC, ReactElement } from "react";
import "./index.scss";

interface TooltipProps {
  children: ReactElement;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
