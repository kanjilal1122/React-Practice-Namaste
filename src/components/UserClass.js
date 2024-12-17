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
    // console.log(" child render method called");

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img className="user-avatar" alt="Image" src={avatar_url} />
        <h3>Age: 30</h3>
        <h4>{email || "Email: raju@gmail.com"}</h4>
        <h4>Location: {location || " India "}</h4>
      </div>
    );
  }
}

export default UserClass;
