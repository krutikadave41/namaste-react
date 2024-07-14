import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    console.log("parent constructor() called ");

    super(props);
  }

  componentDidMount() {
    console.log("parent componentDidMount() called ");
  }
  render() {
    console.log("parent render() called ");

    return (
      <>
        <h1>About Page</h1>
        <h2>This is a food ordering app using React</h2>
        <UserClass name="Krutika" location="Dehradun" />
        <UserClass name="Riti" location="Dehradun" />
      </>
    );
  }
}

export default About;
