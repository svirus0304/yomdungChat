import React from "react";
import classes from "./OpenAiSample.module.css";

let id = 0;

const Messages = (props) => {
  return (
    <>
      {props.messages.map((map) => (
        <div
          key={id++}
          className={`${classes.messageDiv} ${map.isMe ? classes.me : ''}`}
        >
          <div>
            <div className={map.isMe ? classes.me : ''}>{map.name}</div>
            <div className={classes.message}>{map.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Messages;