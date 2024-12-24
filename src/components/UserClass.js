import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "User",
        location: "India",
        
      },
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/kanjilal1122");
      const data = await response.json();
      this.setState({
        userInfo: data,
      });
    } catch (err) {
      console.log("error in UserClass component: " + err.message);
    }
  }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;
  
    return (
      <div className=" m-4 p-2 bg-white rounded-md">
        <h2 className=" text-lg font-bold ">Name: {name}</h2>
        <img className=" rounded-md w-40 m-4" alt="Image" src={avatar_url} />
        <h3 className="font-extralight ">Age: 30</h3>
        <h4 className="font-extralight ">{email || "Email: raju@gmail.com"}</h4>
        <h4 className="font-extralight ">Location: {location || " India "}</h4>
      </div>
    );
  }
}

export default UserClass;
