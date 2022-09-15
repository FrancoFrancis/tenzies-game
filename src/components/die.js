import React from "react";

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : '#fff'
    }

    return(
        <div>
            <div 
                style={styles} 
                className="die-face"
                onClick={props.holdDice}
            >
                <h4 className="die-num">{props.value}</h4>
            </div>
        </div>
    )

}