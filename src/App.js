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
  this.calculateWater=this.calculateWater.bind(this)
    console.log(props)
    this.state={
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }
  calculateWater(temperature,steps,heart){
    let formul=1.5
    if(temperature>20){
      formul=0.02*(temperature-20)+formul
    }
    if( steps>10000){
      formul=0.00002*(steps-10000)+formul
    }
    if(heart>120){
      formul=0.0008*(heart-120)+formul
    }
    console.log(formul,steps-120)
     return formul.toFixed(2)
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

  onClickPlus=(value)=>{
    console.log('App#onChangeSteps value plus', value);

    this.setState({
      steps:value+1000
    })
  }
  onClickMoins=(value)=>{ 
    console.log('App#onChangeSteps value moins', value);
    if(value>0){
    this.setState({
      steps:value-1000,
    })}
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <Water 
          
            water={this.calculateWater(this.state.temperature,this.state.steps, this.state.heart)}
            
          />

          <Person 
            steps={this.state.steps} 
            onChangeFn={this.onChangeSteps}
            onClickPlus={this.onClickPlus}
            onClickMoins={this.onClickMoins}
            stepsMax={MAX_STEPS}
            stepsMin={MIN_STEPS}
         
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
