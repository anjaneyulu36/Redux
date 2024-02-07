import React from "react";

function Counter(){
    var [c,setC]=React.useState(0);
    return(
        <div className="mybox">
            <h1>Counter:{c}</h1>
        </div>
    )
}

export default Counter;