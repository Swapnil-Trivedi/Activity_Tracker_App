import React, { useState } from "react";
import activityContext from "./ActivityContext";

const ActivityState=(props)=>{
    const [state,setState]=useState({"name":"Raju"});
    return (
        <ActivityState.Provider value={state}>
            {props.children}
        </ActivityState.Provider>

    )
}

export default ActivityState;