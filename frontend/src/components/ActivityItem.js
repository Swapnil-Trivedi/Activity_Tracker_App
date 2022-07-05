import React,{useContext} from "react";
import ActivityContext from "../context/Activity/ActivityContext";
import ActivityCard from "./ActivityCard";

const ActivityItem = () => {
  const context = useContext(ActivityContext);
  const { activity} = context;
  
  return (
    <div className="row my-3">
      <h1 className="my-3">Your Activities</h1>
      {activity.map((ele) => {
        return <ActivityCard key={ele.id} ele={ele}></ActivityCard>
      })}
    </div>
  );
};

export default ActivityItem;
