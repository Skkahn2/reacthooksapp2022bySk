import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setMyObject] = React.useState({
    myName: "Sohaib",
    myAge: 24,
    degree: "BSCSE",
    rollNo: 66,
    channel: "Sohaib Khan Developer",
  });
  const changeObject = () => {
    setMyObject({ ...myObject, myName: "Khan", myAge: 23 });

    ///////SPREAD OPERATOR : ...  THE DOTS /////// are for modification used to modify in object

    /////This is a simple string sort of a current value too
  };

  return (
    <div>
      <h1 className="h1style">
        Name: {myObject.myName} & Age: {myObject.myAge} & Degree:{" "}
        {myObject.degree}
      </h1>

      {/*<h1 className="h1style">Name: {myObject.myName} Techncial & Age:24 & Degree: BSCSE</h1> */}

      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;

/////// NOTES :
/////What is Three Dots { ... } & Handle Objects using UseState Hook In React ///////////////
