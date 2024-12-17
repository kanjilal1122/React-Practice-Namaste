import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-detail">
        <h1>About Us Page</h1>
        <div className="about-component">
          <UserClass  />
          <User name="Kamal " location="kolkata" />
        </div>
      </div>
    );
  }
}

// const About = () => {
//   const content = "Class component";
//   return (
//     <div className="about-detail">
//       <h1>About Us Page</h1>
//       <div className="about-component">
//         <UserClass name={content}  location="siliguri " />
//         <User name="Raju Function" location="kolkata" />
//       </div>
//     </div>
//   );
// };

export default About;
