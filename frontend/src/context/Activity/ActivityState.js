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
  return (
    <ActivityContext.Provider value={{ activity, setActivity }}>
      {props.children}
    </ActivityContext.Provider>
  );
};
export default ActivityState;
