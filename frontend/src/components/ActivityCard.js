import React from "react";

function ActivityCard(props) {
  const { ele } = props;
  return (
    <div className="card mx-3 my-3" style={{width: "18rem"}}>
      <div className="d-flex flex-column card-body">
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">{ele.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam voluptas quaerat veritatis dignissimos et, reiciendis, ipsa esse fugit corrupti rem eum pariatur accusantium iste, adipisci sed iusto repellat cum.</p>
        <a href="/#" className="btn btn-primary mt-auto">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ActivityCard;
