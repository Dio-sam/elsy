import React from "react";
import Icon from "./core/Icon";
import RCSlider from "./core/RCSlider";
// import VelocityComponent from "velocity-react";
// import VelocityTransitionGroup from "velocity-react";
 class HeartRate extends React.Component{
  
  //   state={
  //     showSubComponent:true
  //     }
  // whenClicked = () => {
  //     this.setState({
  //     showSubComponent: !this.state.showSubComponent, 
  //     });
  //   }
  
   render(){
    return(
      <div className="box col-lg-3 col-6">
      
      {/* <VelocityComponent animation={{ opacity: this.state.showSubComponent ? 1 : 0 }} duration={500}> */}
            <Icon  
              //onClick={this.whenClicked}
              name="favorite"
              color="red"
            />
      {/* </VelocityComponent>    */}
      
        <RCSlider  
          value={this.props.heart} 
          min={this.props.heartMin} 
          max={this.props.heartMax}
          onChange={this.props.onChangeFn} 
          />
        <p>{this.props.heart} BPM</p>
      </div>
    );
   }
 }
 export default HeartRate;