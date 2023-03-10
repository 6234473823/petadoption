import React from "react";
import Card from "./Card";

export default function DogList(props) {
  const dogLists = props.data.map(event => (
    <Card
      id={event.id}
      image={event.image}
      name={event.name}
      age={event.age}
      species={event.species}
    />
  ));

  return <div>{dogLists}</div>;
}
