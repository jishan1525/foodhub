import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props)
    console.log("Child class const "+ this.props.name)
}
componentDidMount(){
    console.log("child Mount "+ this.props.name)
}
  render() {
    console.log("Child render "+ this.props.name)
    return (
      <div>
        <h1>Profile component and it should be displayed when address is About/Profile</h1>
      </div>
    );
  }
}
export default Profile; //default export