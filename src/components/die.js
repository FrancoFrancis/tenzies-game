import React from "react";

export default function Die(props) {

    return(
        <div className="die-face">
            <h4 className="die-num">{props.value}</h4>
        </div>
    )

}