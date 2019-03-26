import React from "react";
import Person from "./components/Person";
import HeartRate from "./components/HeartRate";
import Temperature from "./components/Temperature";
import Water from "./components/Water";
const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }
  onChangeHeart=(value)=>{
    console.log('App#onChangeHeartRate value', value);
    this.setState({
      heart:value,
    })
  }

  onChangeSun=(value)=>{
    console.log('App#onChangeSun value', value);
    this.setState({
      temperature:value,
    })
  }
  onChangeSteps=(value)=>{
    console.log('App#onChangeSteps value', value);
    this.setState({
      steps:value,
    })
  }

  onClickPlus=()=>{
    this.setState({
      steps:this.state.steps+1000,
    })
  }
  onClickMoins=()=>{
    this.setState({
      steps:this.state.steps-1000,
    })
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <Water/>
          <Person 
            steps={this.state.steps} 
            onChangeFn={this.onChangeSteps}
            onClickPlus={this.onClickPlus}
            onClickMoins={this.onClickMoins}
            stepsMax={MAX_STEPS}
            stepsMin={MIN_STEPS}
            stepsPasPlus={this.state.steps+1000}
            stepsPasMoins={this.state.steps-1000}
          />
          <HeartRate
            heart={this.state.heart} 
            onChangeFn={this.onChangeHeart}
            heartMax={MAX_HEART}
            heartMin={MIN_HEART}
          />
          <Temperature
            temperature={this.state.temperature} 
            onChangeFn={this.onChangeSun}
            temperatureMax={MAX_TEMPERATURE}
            temperatureMin={MIN_TEMPERATURE}
          />
        </div>
      </div>
    );
    }
}

export default App;
