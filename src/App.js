import React, { Fragment, useState } from "react";
import classes from "./App.module.css";
import OpenAiSample from "./components/OpenAi/OpenAiSample";

function App() {

  return (
    <Fragment>
      <div className={classes.entire}>  
        <div className={classes.content}>
          <OpenAiSample />
        </div>
      </div>
    </Fragment>
  );
}

export default App; 