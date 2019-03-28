import React from "react";
import Icon from "./core/Icon"
class Water extends React.Component{
  
  render(){
    return(
      <div className="box col-lg-3 col-6">
        <Icon 
          name="local_drink"
          color="#3A85FF"
        />
       <p>{this.props.water}</p>
       
      </div>
    );
  }
}

export default Water;