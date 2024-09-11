import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          {/* Video Background */}

          <video autoPlay muted loop id="background-video">
            <source src="/img/vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Contact Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>

  );
};
