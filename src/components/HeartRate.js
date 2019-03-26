import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
 class HeartRate extends React.Component{
   render(){
    return(
      <div className="box col-lg-3 col-6">
        <Icon 
          name="favorite"
          color="red"
        />
        <p>{this.props.heart} BPM</p>
        <Slider  min={this.props.heartMin} max={this.props.heartMax} onChange={(val)=>{this.props.onChangeFn(val)}}/>
      </div>
    );
   }
 }
 export default HeartRate;