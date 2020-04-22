import React from "react";

const userOutput = props =>{
    const style = {
        width: "60%",
        margin: "16px auto",
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        padding: "16px",
        textAlign: "center"

    }
    return(
        <div style={style}>
            <p>{props.username}</p>
            <p>This is paragraph 2</p>
        </div>
    )
}

export default userOutput;