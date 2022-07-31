import React, { createContext } from "react";
import ComB from "./ComB";

const BioData = createContext();

const ComA = () => {
  return (
    <BioData.Provider value={"MUHAMMAD SOHAIB KHAN"}>
      <ComB />
    </BioData.Provider>
  );
};
export default ComA;
export { BioData };





////BIODATA IS PASSED AS AN OBJECT

/////context api is the solution of prop drilling
////redux is the other solution
//if
//create a context
//you need a medium : provider
//consumer: to get
////context API / use context

//we need to import create context "context is your biodata"
//Example:
// <BioData.Provider value={"MUHAMMAD SOHAIB KHAN"}>
//<ComB />
//</BioData.Provider>

// use context and it's value bio data being as your component
//useContext hook makes it easy to pass without manually passing props down the tree
//You can use useContext when your data is simple or your app is small
