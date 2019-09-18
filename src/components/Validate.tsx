import React from "react";
import "../Validate.css";

interface Props {
  text: string;
  check: string[];
}

const Validate: React.SFC<Props> = ({ text, check }) => (
  <div>
    <div>
      <span className={check.length ? "trueColor" : "falseColor"}>
        {text} {check.length ? "valid" : "invalid"}
      </span>
    </div>
  </div>
);

export default Validate;
