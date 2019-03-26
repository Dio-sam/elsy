import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
class Temperature extends React.Component{
  render(){
    return(
      <div className="box col-lg-3 col-6">
        <Icon 
          name="wb_sunny"
          color="yellow"
        />
        <p>{this.props.temperature} C</p>
        <Slider min={this.props.temperatureMin} max={this.props.temperatureMax} onChange={(val)=>{this.props.onChangeFn(val)}}/>
      </div>
      
    );
  }
}
export default Temperature