import React, { FC } from "react";
import "./index.scss";
import { BsLinkedin } from "react-icons/bs";
import { TbPhone, TbMail } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";
import Stepper from "../base/Stepper";
import Tooltip from "../base/ToolTip";

interface UserCardProps {
  name: string;
  first_name: string;
  last_name: string;
  current_title: string;
  location: string;
  phone_number?: string;
  personal_email?: string;
  linkedIn?: string;
  experience: string[];
  education: string[];
}

const UserCard: FC<UserCardProps> = ({
  name,
  first_name,
  last_name,
  current_title,
  location,
  phone_number,
  personal_email,
  linkedIn,
  experience,
  education,
}) => {
  return (
    <div className="UserCard-content">
      <div className="UserCard-title-content">
        <div className="UserCard-title">
          <h3 className="UserCard-name">
            {first_name} {last_name}
          </h3>
          {phone_number ? (
            <Tooltip text={phone_number?.toString()}>
              <TbPhone color="#8a898e" />
            </Tooltip>
          ) : (
            ""
          )}
          {personal_email ? (
            <Tooltip text={personal_email?.toString()}>
              <TbMail color="#8a898e" />
            </Tooltip>
          ) : (
            ""
          )}
          <RxDividerVertical color="#ececec" />
          <BsLinkedin color="#2866b1" />
        </div>
        <div className="UserCard-subTitle">
          <h4 className="UserCard-currentTitle">{current_title}</h4>
          <RxDotFilled color="#ededed" />
          <h4 className="UserCard-location">{location}</h4>
        </div>
      </div>
      <hr className="UserCard-line" />
      <div className="UserCard-stepper-content">
        <div className="UserCard-stepper">
          <Stepper title="Experience" content={experience} />
          <Stepper title="Education" content={education} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
