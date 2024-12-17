import { useState } from "react";
const User = ({ name, location }) => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className="user-card">
      <div>
        <h2>Name: {name}</h2>
        <h3>Age: 30</h3>
        <h4>Email: raju@gmail.com</h4>
        <h4>Location: {location}</h4>
        <h4> Like : {like}</h4>
        <button style={{}} onClick={() => setLike(like + 1)}>
          {" "}
          🤍{" "}
        </button>
        <h4> DisLike : {disLike}</h4>
        <button style={{}} onClick={() => setDisLike(disLike + 1)}>
          {" "}
          👎{" "}
        </button>
      </div>
    </div>
  );
};

export default User;
