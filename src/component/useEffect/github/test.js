import React, { useState, useEffect } from "react";
import useTitleCount from "./useTitleCount";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am first one");
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);

  //  /////useEffect(() => {
  /////console.log("Hello Sup Bro");
  ///// }, []);

  //custom hook

  useTitleCount(count);

  console.log("Hello Man Sup");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Test
      </button>
    </div>
  );
};

export default Test;
