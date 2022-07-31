import React, { useState } from "react";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("please fill the data");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;

          /////Object destructuring here as well for using id email and password individually ////

          return (
            <div className="showDataStyles" key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Basicform;

///////REACT HOOKS CONTROLLED FORM (CONTROLLED )
//////USE OF ONCHANGE HANDLER
///////EVENT WRITTEN VALUE BEING PUT EVENT OBJECT BEING USED
//EVENT OBJECT IS VERY IMPORTANT

//////in on submit you have to call the function and then submit the
///// form define submit form using fat arrow above the return */

////allEntry.map( ) this will be your loop
////new div being created and allENTRY WITH CURLY BRACES
/////IS YOUR JAVASCRIPT PART SO YOU HAVE TO GIVE CURLY BRACES
///////////THEN WE'LL USE FAT ARROW FUNCTION IN THAT MAP

///////////React Form Validation Hooks and How to write Clean Code with ES6///////////////
/* you can use //////object destructuring////// (both the key values are same 
    so we'll just remove the right side of the parts the email and password one)
    so there you go we are doing object destructuring 
    here by removing the sections of email and pass and making our code short
    //////array destructuring ////////////
    here code can be sorted here
    Date Object used:
    const newEntry = {id: new Date().getTime().toString, email:email, password:password };
    wanted in string so passed a string (.toString)
    new Date().getTime().toString
Also the use spread operator for starting nd previous
 data of email and [password] now use console.log();
now we have one problem with the HMTL FORM IS THAT IT GETS AUTO REFRESHED.
why it's getting auto 
refreshed why so we don't need that and for that we will pass on the event object 
WE NEED IS KAE NEED STATE MAIN DATA ADD HOU JAYE THE MAIN THINGY FOR US
AllENTRY IS YOUR ARRAY 
JUST NEED TO SEND USER DATA TO BACKEND */
