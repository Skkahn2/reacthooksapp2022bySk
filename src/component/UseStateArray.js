import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      myName: "Sohaib",
      age: 24,
    },
    {
      id: 1,
      myName: "thapa",
      age: 26,
    },
    {
      id: 2,
      myName: "technical",
      age: 26,
    },
  ];

  ///console.log(bioData);

  const [myArray, setmyArray] = useState(myBioData);

  const clearArray = () => {
    setmyArray = [];
  };

  const removeElem = (id) => {
    // alert(id);   ( **FILTER METHOD** : FILTERS OUT  ) TO DO LIST

    const myNewArray = myArray.filter((curElem) => {
      return curElem.id !== id;
    });

    setmyArray(myNewArray);
  };

  return (
    <>
      {
        myArray.map((curElm) => {
          ////return is used as a keyword here

          ////////// When ever we click on the button?
          /////// onClick use function with that means you are basically calling another function.
          ///// So this is your fat arrow function
          //////<button className="btnInner" onClick={ () => removeElem(curElm.id)}> remove </button>
          return (
            <h1 className="h1style" key={curElm.id}>
              Name:
              {curElm.myName} & Age: {curElm.age}
              <button
                className="btnInner"
                onClick={() => removeElem(curElm.id)}
              >
                {" "}
                remove{" "}
              </button>
            </h1>
          );
        })
        //// bioData.map((curElm) => {
        //////return <h1 className="h1style">Name: {curElm.myName} & Age: {curElm.age} </h1>   THAT'S BASICALLY THE LOOP SP WE RE WORKING IN THE LOOP
      }

      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>

    ///<div>

    //  {/*<h1 className="h1style">Name: Sohaib & Age: 24 </h1>*/}

    //</div>
  );
};

export default UseStateArray;

/////////////Warning: Each child in a list should have a unique "key" prop.
//////////Check the render method of `UseStateArray`. See https://reactjs.org/link/warning-keys for more information.
//////////at h1
//////////at UseStateArray (http://localhost:3000/static/js/bundle.js:265:80)
//////////at div
//////////at App
