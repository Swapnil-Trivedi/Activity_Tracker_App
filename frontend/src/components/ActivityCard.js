import React from "react";

function ActivityCard(props) {
  const { ele } = props;

  return (
    <div className="card mx-3 my-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">
          {ele.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum veniam voluptas quaerat veritatis dignissimos et,
          reiciendis, ipsa esse fugit corrupti rem eum pariatur accusantium
          iste, adipisci sed iusto repellat cum.
        </p>
        <hr />
        <div className="container text-center">
        <i className="fa-solid fa-pen-to-square mx-3 fa-lg"></i>
        <i className="fa-solid fa-trash-can fa-lg mx-3"></i>
        </div>
      </div>
        
    </div>
  );
}

export default ActivityCard;

