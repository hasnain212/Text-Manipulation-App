import React from "react";

export default function card() {
  return (
   <div className="container">
      <div className="card my-8">
     <img src="..." className="rounded mx-auto d-block" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title that wraps to a new line</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
   </div>
  );
}
