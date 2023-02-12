import React, { Fragment, useState } from "react";
import classes from "./App.module.css";
import OpenAiSample from "./components/OpenAi/OpenAiSample";
import Container from "./components/UI/Container";

function App() {

  return (
    <Fragment>
      <Container className={classes.entire}>  
        <div className={classes.content}>
          <OpenAiSample />
        </div>
      </Container>
    </Fragment>
  );
}

export default App; 