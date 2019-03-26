import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

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
            <button onClick={()=>{this.props.onClickPlus()}}>
                +
            </button>
        
            <button onClick={()=>{this.props.onClickMoins() }}>
                -
            </button>
        <Slider min={this.props.stepsPasMin } max={this.props.stepsMax} onChange={(val)=>{this.props.onChangeFn(val)}}/>
      
        
        <p>{this.props.steps} Steps</p>
      </div>
    );
  }
}

export default Person;