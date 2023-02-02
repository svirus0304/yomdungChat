import React from "react";
import classes from "./DotLoadingIcon.module.css";

const DotLoadingIcon = (props) => {
  const propClasses = props.classes;
  return (
    <>
      <div className={`${propClasses} ${classes.spinnerDiv}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <circle className={classes.spinner_S1WN} cx="4" cy="12" r="3" />
          <circle
            className={`${classes.spinner_S1WN} ${classes.spinner_Km9P}`}
            cx="12"
            cy="12"
            r="3"
          />
          <circle
            className={`${classes.spinner_S1WN} ${classes.spinner_JApP}`}
            cx="20"
            cy="12"
            r="3"
          />
        </svg>
      </div>
    </>
  );
};

export default DotLoadingIcon;
