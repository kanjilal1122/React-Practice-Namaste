import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-detail">
        <h1>About Us Page</h1>
        <div className="about-component">
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
