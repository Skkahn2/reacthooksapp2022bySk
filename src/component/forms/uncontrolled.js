import React, { useState, useRef } from "react";

const Uncontrolled = () => {
  /////////// it's like a useState only and it preserves the value. No rerendering the component.
  ////////To handle the DOM USING THE REFERENCE  ///////////////
  ////event object being passed so that by default the form is not being submitted

  /////ONE OBJECT HAVING THE PROPERTY CURRENT AND VALUE INPUT IS luckyName
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill the data") : setShow(true);
  };
  ////luckyname is your id
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">enter your luckyName</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
      </form>

      <p> {show ? `your lucky name is ${luckyName.current.value}` : ""} </p>
    </div>
  );
};

export default Uncontrolled;

//////
//////USE OF USE REF
