import React from "react";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {
  render() {
    return (
      <>
        <div> Hello Class Components</div>
        <>LoggedIn User</>
        <UserContext.Consumer>
          {({loggedUser}) => {
            <h1>{loggedUser}</h1>;
          }}
        </UserContext.Consumer>
      </>
    );
  }
}

export default AboutClass;
