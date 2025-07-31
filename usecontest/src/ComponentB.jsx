import ComponentC from "./ComponentC.jsx"
import { UserName } from "./ComponentA.jsx";
import React, {createContext} from "react"
import { useContext } from "react";

function ComponentB(){
    const name = useContext(UserName);
    return  (
        <div className="box">
            <h1>Component B</h1>
            <h2>Good night {`${name}`}</h2>
            <ComponentC/>
        </div>
    );
}

export default ComponentB;