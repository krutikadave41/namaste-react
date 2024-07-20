import React from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <h1 className="font-bold text-xl">About Page</h1>
        <p className="text-lg shadow-sm">
          This is a food ordering app using React
        </p>
        <UserClass name="Krutika" location="Dehradun" />
        <div>
          <UserContext.Consumer>
            {( {loggedInUser} ) => {return <h2 className="p-4">LoggedInUser: {loggedInUser}</h2>
            }}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}

export default About;
