import React, { useContext } from "react";
import { BioData } from "./ComA";

const Comc = ({ name }) => {
  const channelName = useContext(BioData);
  return <h1>Hello ComC {channelName} </h1>;
};

export default Comc;

// consumer
//HOOK BEING IMPORTED ABOVE AT THE TOP
//BIODATA PASSED
//use context hook
