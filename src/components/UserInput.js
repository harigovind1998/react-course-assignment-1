import React from "react";
import "./UserInput.css";

const userInput = props =>{
    return(
        <div style={{margin:"auto"}}>
            <input type="text" onChange={props.changeUsername} value={props.username} className="UserInput"/>

        </div>
    );
}

export default userInput;