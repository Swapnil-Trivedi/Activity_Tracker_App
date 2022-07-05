import React, {useContext, useState} from "react";
import ActivityItem from "./ActivityItem";
import ActivityContext from "../context/Activity/ActivityContext";

export default function Home() {
  const context = useContext(ActivityContext);
  const {addActivity} = context;
  const handleClick=(e)=>{
    // to avoid page getting reloaded again
    e.preventDefault();
    addActivity(note.title,note.description);
  }

  const [note,setNote]=useState({title:"", description:""});

  // ki add notes mein jo hein usko rkho, uske andr form ki value dal do
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="container my-3">
        <h1>Add Activity</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
            />
            </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="description"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>

      <ActivityItem></ActivityItem>
    </div>
  );
}
