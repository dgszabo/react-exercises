import React from "react";

let Key = ({ letter, keyPress }) => {
    return (
        <div className="key" onClick={keyPress}>
            <h3>{letter}</h3>
        </div>
    )
}

export default Key;