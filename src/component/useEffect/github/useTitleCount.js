import { useEffect } from "react";

const useTitleCount = (count) => {
  useEffect(() => {
    console.log("I am the first one");
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats `;
    }
  }, [count]);
};
export default useTitleCount;

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
