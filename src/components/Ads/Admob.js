import React, { useEffect } from "react";

const Admob = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320223393818746";
    script.async = true;
    script.crossorigin = "anonymous";
    document.head.appendChild(script);
  });
};

export default Admob;
