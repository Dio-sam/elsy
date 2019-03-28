import React from "react";
import Icon from "./core/Icon";
import RCSlider from "./core/RCSlider";
class Temperature extends React.Component{
  render(){
    return(
      <div className="box col-lg-3 col-6">
        <Icon 
          name="wb_sunny"
          color="yellow"
        />
      
        <div>
          <RCSlider  
            value={this.props.temperature} 
            min={this.props.temperatureMin} 
            max={this.props.temperatureMax}
            onChange={this.props.onChangeFn} 
            />
          <p>{this.props.temperature} C</p>
        </div>
      </div>
      
    );
  }
}
export default Temperature