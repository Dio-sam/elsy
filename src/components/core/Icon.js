import React from "react";
class Icon extends React.Component{
  render(){
    return(
      <i className="material-icons" 
            style={
                    {
                      fontSize : 100,
                      color:this.props.color
                    }
                  }
        >
          {this.props.name}
        </i>
    );
  }
}
export default Icon;