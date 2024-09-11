import React from "react";
import Counter from "./counter";

export const Features = (props) => {

  setInterval(() => {

  })
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>More About</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                <Counter targetNumber={d.number} duration={2} />
                <h3>{d.title}</h3>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
