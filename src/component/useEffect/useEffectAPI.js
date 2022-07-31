import React, { useEffect, useState } from "react";
import Loading from "./github/loading";
import Githubusers from "./github/githubusers";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  ///fetch API IF PERFECT DAT MEANS HAVE TO SHOW DATA 110%
  ///ASYNC FUNCTION BEING DECLARED AND ASYNC

  const getUsers = async () => {
    //(APPLIED TRY AND CATCH FOR ERROR HANDELING)
    //SET LOADING ITS A USESTATE (TERMINOLOGY)//
    //ASYNC
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
      //// console.log(response)
    } catch (error) {
      console.log("my error is" + error);
    }
  };

  useEffect(() => {
    {
      /*const getUsers = async  () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            setUsers(await response.json());
        console.log(response) FUNCTION IS BEING CALLED */
    }

    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }
  //////IN REACT SENSE COMPONENT KOU PROPS PASS KARTAE HAIN
  return (
    <>
      <Githubusers users={users} />
    </>
  );
};

export default UseEffectAPI;

//// MY MAIN NOTES:

///////Fragmets <> </>

//////BOOTSTRAP 4 GRID SYSTEM 1 row 12 columns and if you want to show three divs
/////Page refresh houtay hee action perform karna hou yaan event kou run karna hou tou we have a "useEffect"
/////direct async function can't be created
////Fetch API RETURNS THE PROMISE AND THEN WE HAVE TO HANDLE THE PROMISE
///// ASYNC AWAIT IS USED TO MAKE THE PROMISES THE SIMPLEST
/////IN PROMISE EITHER THE DATA IS FULLFILLED OR NOT PROMISE INCLUDES RESOLVED AND REJECTED ONE

////IN PROMISES IF IN OUR CASE THE PRIMISE SAYS PENIDNG THAT MEANS IT HAS NO
////THE POWER OF REACT HOOK: rEACT HOOK TO CALL API EVEN IF YOU NOT WRITE USEEFFECT YOU WILL SEE THE JAVASCRIPT
////whenever we use setUsers(await response.json()); it re renders your component (useState)

////users.map((curElem) => {} Basically used to itterate and use for applying the loops and strings

////How to call API
///HOW ASYNC AND AWAIT CAN BE HANDLED
///HOW CAN YOUR HANDLE PROMISES
////JSON METHOD
/// HOW CAN YOU HANDLE THE PROBLEM IN USEEFFECT
////USER.MAP IS YOUR LOOP RUNNING USING MAP METHOD => CAN GET DAT IN ARRAY
///////if you want to display the data (using dynamic data)

////// React Github User Project Code-Refactor and Adding Error Handling, Loading Functionality
////The Effect Hook lets you perform side effects in function components

////HOW WE WILL DO ERROR HANDLING?
//////const getUsers = async  () => {
/*  try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
        console.log(response)
        } catch (error) {
            console.log("my error is"+ error);
        }
}*/

/// toggle and hide use
