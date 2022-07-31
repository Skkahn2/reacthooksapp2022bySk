////////**********MY NOTES*************// MUHAMMAD SOHAIB KHAN //
//1: Always write it inside the component or function

///we have the hook to use it using functional component
//call hooks from react function components (important)
// functional component

//2: Component name must be Pascal Case(first letter should be uppercase)

//3: we can directly import or we can directly write it using React.hookName.

//4: Don't call Hooks inside loops,conditions,or nested functions.

import React from "react";
///////// import React, { useState } from 'react' (One way to write it down)

const RulesHook = () => {
  // (Functional Component)
  //That's a fucntion and in that fucntion we have written it inside the component (hook)
  const [myName, setMyName] = React.useState("sohaib technical "); // (RULE NO 1) hooks are always inisde the component or the function

  // Pascal case VS camelCase
  //When you export the function
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};

export default RulesHook;

//// MERN STACK:
//mongoDB
//Express
//React
//Node Js
