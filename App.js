import React, { Fragment, useState } from "react";
import Nav from "./components/UI/Nav";
import classes from "./App.module.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState();

  const selectedMenuHandler = (component) => {
    setSelectedMenu(component);
  };

  return (
    <Fragment>
      <div className={classes.entire}>
        <Nav onSelect={selectedMenuHandler} />
        <div className={classes.content}>{selectedMenu}</div>
      </div>
    </Fragment>
  );
}

export default App;
