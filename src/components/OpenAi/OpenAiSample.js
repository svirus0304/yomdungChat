import React, { Fragment, useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Messages from "./Messages";
import classes from "./OpenAiSample.module.css";

import SendIcon from '../UI/Svg/SendIcon';
import DotLoadingIcon from '../UI/Svg/DotLoadingIcon';

//Open AI
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

const DUMMY_MESSAGES = [
  // { id: Date.now(), name: "Me", isMe: true, text: "Hello" },
  // { id: Date.now(), name: "GPT3", isMe: false, text: "Hello!!!\n!!\n!!!\n!" },
];

const OpenAiSample = () => {
  const [messages, setMessages] = useState(DUMMY_MESSAGES);

  const inputRef = useRef();
  const scrollRef = useRef();

  //스크롤 맨 밑으로
  const resetScroll = (props) => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  //채팅 입력 시 스크롤 맨 밑으로
  useEffect(() => {
    resetScroll();
  }, [messages]);

  //엔터 치면 입력
  const keyDownHandler = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      sendHandler();
    }
  };

  //메시지 추가
  const addMessage = (props) => {
    setMessages((prev) => {
      const newMessages = [...prev];
      switch (props.type) {
        case "ADD":
          newMessages.push({
            id: props.id,
            name: props.name,
            isMe: props.name === "Me" ? true : false,
            text: props.text,
          });
          return newMessages;
        case "UPDATE":
          newMessages.map((map) =>
            map.id === props.id ? (map.text = props.text) : ""
          );
          return newMessages;
        default:
          return newMessages;
      }
    });
  };

  //메시지 입력 시
  const sendHandler = async () => {
    let id = Date.now();

    const text = inputRef.current.value.trim();
    if (text.length === 0) return; //미입력 시 return
    inputRef.current.value = ""; //input 비우기
    addMessage({ type: "ADD", id: id, name: "Me", text: text }); //메시지 배열에 추가

    //api 전송

    addMessage({
      type: "ADD",
      id: ++id,
      name: "GPT3",
      text: <DotLoadingIcon />,
    });
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text, //Say this is a test
      temperature:0.9,
      max_tokens:2048,
      top_p:1,
      frequency_penalty:0,
      presence_penalty:0.6
    });
    console.log(res);
    addMessage({
      type: "UPDATE",
      id: id,
      name: "GPT3",
      text: res.data.choices[0].text.trim(),
    });
  };

  return (
    <Fragment>
      <h2>Chat GPT 3</h2>
      <div className={classes.room}>
        <div ref={scrollRef} className={classes.messages}>
          <Messages messages={messages} />
        </div>
        <div className={classes.textInput}>
          <input type="text" ref={inputRef} onKeyDown={keyDownHandler} />
          <div onClick={sendHandler} className={classes.send}>
            <SendIcon />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OpenAiSample;
