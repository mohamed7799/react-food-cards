import React from "react";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";
import three from "../../assets/images/3.jpg";
import four from "../../assets/images/4.jpg";
import five from "../../assets/images/5.jpg";
import six from "../../assets/images/6.jpg";
import Card from "./card/card";
import "./foodCards.scss";
const imgs = [one, two, three, four, five, six];

export default function foodCards() {
  let cards = imgs.map((img) => {
    return <Card img={img}></Card>;
  });

  return <div className="cards">{cards}</div>;
}
