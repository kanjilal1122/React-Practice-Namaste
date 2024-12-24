import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center mt-6 bg-slate-100 h-dvh">
        <div className="">
          <h1 className=" font-black text-center text-4xl text-sky-500">About Us Page</h1>
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
