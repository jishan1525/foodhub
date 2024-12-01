import React from 'react';


class Profile extends React.Component {
  constructor(props){
    super(props)
    //create a state
    this.state = {
      userInfo: {
        name: "Dummy",
        id: 1,
        email: "",
        location: "",}
      }
    
    

}
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/jishan1525"); 
    const json = await data.json();
    //to put the data in the screen we need to have a state
    console.log(json);
    this.setState({
      userInfo: json,
    });
    
    
}
//mount will be called only once after the first render
  componentDidUpdate() {
    console.log("Component did update");
  }

  //update will be called after every next render similarily as in functional component using useEffect and [] as second argument

  render() {
    
    return (
    
      <div>
       <h1>Profile details</h1>
       <img src={this.state.userInfo.avatar_url} alt="avatar" />
       <h2>Name : {this.state.userInfo.name}</h2>
       <h2>Location : {this.state.userInfo.location}</h2>
      </div>

    );
  }
}
export default Profile; //default export


/**
 * child constructor
 * child render
 * child componentDidMount
 * API call
 * setState
 * child re-render
 * child componentDidUpdate
 * when we go to another page and come back to the same page then the child component will not be re-rendered
 * when we go to some other page completely then the child component will be unmounted and componentwillunmount will be called
 *  */