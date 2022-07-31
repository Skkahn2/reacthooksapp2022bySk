import React, { useState} from 'react'

const ShortCirEval = () => {
    const [ demo, setDemo]= useState(" ");

  return (

    <div>

<h1 className="h1style">
{  demo || 

<>

    <h1>mast</h1>
    <p>you can do anything</p>

</>

}

</h1>

<h1 className="h1style">{ "Sohaib" && "demo" }</h1>
                              

{/*WE CALL IT AS REACT JSX CALLED AS HTML BUT WE CALL IT THAT WAY.

BASICALLY MULTIPLE DATA RENDERING IS CALLED AS SHORT CIRCUIT EVALUATION AND IS USED IN FUCNTIONAL COMPONENT IN HOOKS 

THE USE OF &&($$) AND THE USE OF || (OR) IN LOGICAL OPERATORS 
in or operator if data is true then you'll get left side of the data
opposite for and operator you'll get right side of the data if it's true

*/}


    </div>
  )
}

export default ShortCirEval