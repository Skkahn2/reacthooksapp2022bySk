import React, { useState } from "react";
import "./App.css";

import Ruleshook from "./component/RulesHook";

import UseStateArray from "./component/UseStateArray";

import UseStateObject from "./component/UseStateObject";

import ShortCirEval from "./component/ShortCirEval";

import Basicform from "./component/forms/basicform";

import UseEffects1 from "./component/useEffect/useEffects1";
import UseEffect2 from "./component/useEffect/useEffect2";

import UseEffectAPI from "./component/useEffect/useEffectAPI";

import Uncontrolled from "./component/forms/uncontrolled";

import UseReducer from "./component/useReducer/useReducer";

import ComA from "./component/useContext/ComA";
import Test from "./component/useEffect/github/test";

/////// NOTES FOR USING USESTATE //////////////////

const App = () => {
  //console.log(useState('MR SOHAIB KHAN THINGY'));
  // let myfirstVal = useState('thingy')[0];
  //console.log(myfirstVal);
  // var val = 'SOHAIB THINGY';

  //const [ myName, setMyName] = React.useState('Sohaib Thingy Subscribe');
  //const changeName = () => {

  //val = "MUHAMMAD SOHAIB KHAN";
  //console.log(val);
  //setMyName('MUHAMMAD SOHAIB KHAN')
  //let val = myName;

  //Challenge NO 1

  //(val === 'Sohaib Thingy Subscribe') ?
  //   setMyName('MUHAMMAD SOHAIB KHAN') : setMyName('Sohaib Thingy Subscribe');

  // }

  // react is a javascript library
  //  using Val ternary operator
  // to toggle
  // OR

  //if (val === 'Sohaib Thingy Subscribe') {
  //setMyName( 'MUHAMMAD SOHAIB KHAN' )
  //} else {
  //  setMyName('Sohaib Thingy Subscribe')
  //}
  //}

  // console.log(myName);

  return (
    <div>
      {/*<h1>{myName}</h1>
<button className='btn' onClick={changeName} >click me plz</button>*/}

      {/*<Ruleshook />*/}

      {/*<UseStateArray/>*/}

      {/*<UseStateObject/>*/}

      {/*<ShortCirEval />*/}

      {/*<Basicform/>*/}

      {/*<UseEffects1/>
        <UseEffectAPI/>
        <UseEffect2/>*/}

      {/*<Uncontrolled />*/}


      {/*<UseReducer />*/}
      {/*<ComA />*/}

      <UseEffects1 />
      <Test />

    
    </div>
  );
};

export default App;

// NOTES
// what is array destructuring ?
// to simplify the array more significantly

// UseState?
//object array string first value as initial value initial state as well
//function work is to
//usestate is a Hook that lets you add React state to function components.
// kisi bhee cheez kee state kou change karnae liyae hum usestate use kartay hain aur yae zain bahi na basic tip dee bas roulaa khattam

// usestate is called in fucntion the first rule
// React Hook"useState"is called in function"rulesHook"that is neitheraReact
//function component noracustom React Hook function.React component names must start with an
//uppercase letter react-hooks/rules-of-hooks

/////// What is Three Dots { ... } 🤔 & Handle Objects using UseState Hook In React

///////////useReducer Hook
///////////Reducers are pure functions that take in a state and action and returna a new state
///////////Given a set of inputs it should always return the same output. No surprises, side effects, API calls, mutations.
