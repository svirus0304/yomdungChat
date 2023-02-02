import React, { useState } from "react";
import DotLoadingIcon from "../UI/Svg/DotLoadingIcon";
import Form from "./Form";
import classes from "./StableDiffusionMain.module.css";

//https://documenter.getpostman.com/view/18679074/2s83zdwReZ
const StableDiffusionMain = () => {
  const [aiImg, setAiImg] = useState({});

  const doneHandler = (props) => {
    setAiImg(props);
    console.log(aiImg);
  };

  return (
    <>
      {/* <DotLoadingIcon classes={classes.spinnerDiv} /> */}
      <div className={classes.aiImgDiv}>
        {aiImg.isSuc && <img src={aiImg.imgSrc} />}
        {!aiImg.isSuc && aiImg.error}
      </div>
      <Form onDone={doneHandler} />
    </>
  );
};

export default StableDiffusionMain;
