import userDebug from "../../common/userDebug";
import { useEffect, useState } from "react";

const Container = (props) => {
  let [conHeight, setConHeight] = useState("");
  const newClasses = props.className;

  const resizeHandler = (props) => {
    setConHeight(window.innerHeight+"vh");
    userDebug({ conHeight });
  };

  window.addEventListener("resize", resizeHandler);

  //   useEffect(() => {
  //     window.addEventListener("resize", resizeHandler);
  //     return () => {
  //       window.removeEventListener("resize", resizeHandler);
  //     };
  //   }, []);

  return (
    <div className={newClasses} style={{ "--conHeight": conHeight }}>
      {props.children}
    </div>
  );
};

export default Container;
