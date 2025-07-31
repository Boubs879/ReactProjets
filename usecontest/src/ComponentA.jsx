import { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserName = createContext()

function ComponentA(){
    const [name, Setname] = useState("Babacar");
    return  (
        
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${name}`}</h2>
            <UserName.Provider value = {name}>
            <ComponentB name = {name}/>
            </UserName.Provider>
        </div>
       
    );
}

export default ComponentA;