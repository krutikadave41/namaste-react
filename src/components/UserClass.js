import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: this.props.name,
        location: this.props.location
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krutikadave41");
    const json = await data.json();
    this.setState({userInfo: {
        name: json.name,
        location: json.location,
        avatarurl: json.avatar_url
    }})
  }
  render() {
    const { name, location, avatarurl } = this.state.userInfo;
    
    return (
      <div className="p-4">
        <h2> Name: {name}</h2>
        <h2><img className="user-image" src={avatarurl} alt="user-image"></img></h2>
        <h3> Location: {location}</h3>
      </div>
    );
    
  }
}

export default UserClass;
