import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Typography } from "@mui/material";
import { dogData } from "./data";
/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image;
  let listOfClasses = null;

  if (props.effect) {
    listOfClasses = "styleImage bw";
  } else {
    listOfClasses = "styleImage";
  }

  if (isImageURL) {
    return (
      <div className={listOfClasses} onClick={props.onClick}>
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.name}</p>
      <p className="styleLocationLabel">{props.age}</p>
      <p className="styleDescription">{props.species}</p>
    </div>
  );
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bwEffect: false };
    this.toggleEffect = this.toggleEffect.bind(this);
  }

  toggleEffect() {
    this.setState(prevState => ({
      bwEffect: !prevState.bwEffect
    }));
  }

  render() {
    return (
         <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard" id={this.props.id}>
          <CardImage
            image={this.props.image}
            width={this.props.width}
            effect={this.state.bwEffect}
            onClick={this.toggleEffect}
          />
          <CardContent
            name={this.props.name}
            age={this.props.age}
            species={this.props.species}
          />
        </div>
      </div>
    );
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  name: "ชื่อ",
  age: "อายุ",
  species: "สายพัน"
};
