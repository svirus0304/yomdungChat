import userDebug from "../../common/userDebug";
import { useEffect, useState } from "react";

const Container = (props) => {
  let [conHeight, setConHeight] = useState("90vh");
  const newClasses = props.className;

  // const resizeHandler = (props) => {
  //   setConHeight(window.innerHeight);
  //   userDebug({ conHeight });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", resizeHandler);
  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // },[]);

  return (
    <div className={newClasses} style={{ "--conHeight": conHeight }}>
      {props.children}
    </div>
  );
};

export default Container;
