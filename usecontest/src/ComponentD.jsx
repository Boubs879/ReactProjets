import React, {createContext, useContext} from "react";
import { UserName } from "./ComponentA.jsx";

function ComponentD(){
    const name = useContext(UserName);
    return  (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Goog buy ${name}`}</h2>
        </div>
    );
}

export default ComponentD;