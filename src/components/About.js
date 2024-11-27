import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./ProfileClass";
// const About2 = () =>{
// return (
//     <div>
//         <h1>About Us Page</h1>
//         <p>
           
//             This is the About us page of swiggy clone</p>
//             <Outlet /> {/* This is where the child route (Profile) will be rendered */}
//     </div>
// )
// }

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent class const")
    }
    componentDidMount(){
        console.log("Parent Mount")
    }
    render(){
        console.log("Parent render")
        return(

            <div>
            <h1>About Us Page</h1>
            <p>
               
                This is the About us page of swiggy clone</p>
                <Outlet name={"First one"}/>
                <Profile name={"First one"}/> {/* This is where the child route (Profile) will be rendered */}
        </div>
        )
    }

}

export default About;