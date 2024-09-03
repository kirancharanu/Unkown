// -->use state<--
// -> use state anedhi functional component lone use cheyali,classes lo use cheyakudadhu.
// -> use state values ni use chesukovacchu ,alane set cheyavacchu.
// -> use state returns an array with two values.

import react { useState } from "react";

const useState = () => {
const [name,setname] = useState("Kiran");
return(
    <div>
        <center>
     <h1>{name}</h1>
     <button onClick={( => setname("Charan"))}>Change</button>
</center>
    </div>
)
}

// -->use Effect<--
// -> return ina ventane use effect anedhi call auvtundhi.
// -> use effect lo function ni 1 time execuite chestundhi,after return statement.
// -> component variable update or change ina prathi sari, use effect function execuite auvtune untunmdhi.

function(){
    useEffect(() => console.log("Clicked"),[count])
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

// -->use Context<--
// ->context creat cheyadam
// ->parent component nunchi target component ki provider use chesi data ni pass cheyadam
// ->context hook use chesukoni target component lo data ni access chesi use chesukovadam

import react,{useContext} from 'react'
import {context} from "/xxx"

function componentX() {
    const data=useContext(context)
    return(
        <div>
        {data}
        </div>
    )
}

export default componentX

// -->useReference<--
// -> functional component lo unna DOM elements ki reference ni creat cheyadam kosam use chestam
// -> DOM elements ni direct ga access chesukovadaniki useReference use chestam


// -->useReducer<--
// -> useReducer anedhi functional components lo state management kosam use chestam
// -> useReducer is mostly use in complex state management
// ->useReducer is similar to useState
