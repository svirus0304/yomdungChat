const userDebug = (props) => {
  if (process.env.NODE_ENV === "development") {
    console.log(props);
  }
};

export default userDebug;
