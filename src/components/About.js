import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center mt-6 bg-slate-100 h-dvh">
        <div className="">
          <h1 className=" font-black text-center text-4xl text-sky-500">
            About Us Page
          </h1>
          <h1>LoggedIn User</h1>
          <UserContext.Consumer>
            {({ loggedUser }) => {
              <h1>{loggedUser}</h1>;
            }}
          </UserContext.Consumer>
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
