import React, { useState, useEffect } from "react";
import useTitleCount from "./github/useTitleCount";

////rerendering and use effect will work and when condition given then
const UseEffects1 = () => {
  const [count, setCount] = useState(0);

  // custom hooks

  useTitleCount(count);

  console.log("Hello from the other side");
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click😀
      </button>
    </div>
  );
};

export default UseEffects1;

/////useEffect(() => {
///// console.log("I am first one");
///// if (count >= 1) {
/////  document.title = `Chats (${count})`;
/////  } else {
/////     document.title = `Chats`;
/////  /////  }
/////  }, [count]);
//////then pass the variable which is in useState
//////to optimize and destroy (unmounted function that is )
/////useEffect(() => {
/////console.log("Hello Sup Bro");
///// }, []);

// My NOTES:

/////multiple useEffect can be used as well ///empty array given then will work on update
///// console.log("Hello to all of you out");

////Custom message printing
/////Understanding the useEffect Dependency List Array in React Hook

///////UseEffect hook automatically renders or automatcially calls itself
//////Useeffect is used to achieve the lifecyle.
//////to fetch api or call api or That can be subscription based

/////////////React useEffect Hook Challenge no. 3
//////////UseEffect IS CALLED CONDITIONALLY so it will not work because you can't call it conditions like IF {}

//////life cycle in react
////// class components : did mount did update
/////// functional components

// FOR CUSTOM HOOK:
///For Same Functionality on multiple Pages
///Created my own custom hook in other words component
///You can basically say that you are using it as a function here means
///you are calling a function mainly you can say that too
//When ever i'm gonna start and call this function
/// i'm gonna get this using custom hook
//Can be called as normal javascript function
//Same functionality but no need to write the code
//Click Test as Reference in the making of Custom hook
//custom hook also called as component
//custom hook being called once and you can use it with ease
