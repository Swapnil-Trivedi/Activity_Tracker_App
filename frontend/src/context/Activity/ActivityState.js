import React, { useState } from "react";
import ActivityContext from "./ActivityContext";

const ActivityState = (props) => {
  const activityInitial = [
    {
      id: 1,
      author: 1,
      title: "Goal1",
      description: "This is my dummy activity number 1",
      createdAt: "2022-06-17T17:12:13.696493Z",
      completeDate: "2022-06-17T17:12:12Z",
    },
    {
      id: 2,
      author: 1,
      title: "Goal2",
      description: "This is the second activity",
      createdAt: "2022-06-17T17:14:01.626861Z",
      completeDate: "2022-06-17T17:14:00Z",
    },
    
  ];

  const [activity, setActivity] = useState(activityInitial);

  //add Activity
  const addActivity=(title,description)=>{
    const item={
      "id": Math.random(),
      "author": 1,
      "title":title,
      "description":description,
      "createdAt": "2022-06-17T17:14:01.626861Z",
      "completeDate": "2022-06-17T17:14:00Z"
    }
    setActivity(activity.concat(item));
  }

  //delete activity
  const deleteActivity=(id)=>{
    console.log(id);
    const newActivity=activity.filter((activity)=>{return activity.id!==id});
    setActivity(newActivity);
  }
  //edit activity
  const editActivity=()=>{}

  return (
    <ActivityContext.Provider value={{ activity, addActivity ,deleteActivity ,editActivity}}>
      {props.children}
    </ActivityContext.Provider>
  );
};
export default ActivityState;
