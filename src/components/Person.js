import React from "react";
import Icon from "./core/Icon";

import RCSlider from "./core/RCSlider";

class Person extends React.Component{

  constructor(props){
    super(props);
    this.state={
    
      isClicked:false
    }
  }
  render(){
 
    return(
      <div className="box col-lg-3 col-6">
        <button onClick={()=>{
          this.setState({
          
            isClicked:!this.state.isClicked
          }) 
        }}>
        {this.state.isClicked ? "HOMME" : "FEMME"}
        </button>
        {/* console.log({this.state.color}) */}
        <Icon 
          name="directions_walk"
          color={this.state.isClicked ? "blue" : "pink"}
        />
            <button onClick={()=>{this.props.onClickPlus(this.props.steps)}}>
                +
            </button>
        
            <button onClick={()=>{this.props.onClickMoins(this.props.steps) }}>
                -
            </button>
            

        <RCSlider  
          value={this.props.steps} 
          min={this.props.stepsMin} 
          max={this.props.stepsMax}
          onChange={this.props.onChangeFn} 
        />
        <p>{this.props.steps} Steps</p>
      </div> 
    );
  }
}

export default Person;