import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "./card.scss";
export default function card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.img} alt="" />
      </div>
      <h2 className="card__title">This is title</h2>
      <p className="card__des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint
        culpa possimus doloremque molestiae facere id, architecto fugit vel
        sapiente pariatur maiores eveniet ut ab placeat? Doloribus impedit
        ratione tenetur!
      </p>
      <div className="card__rating">
        <div className="card__rating__stars">
          <AiFillStar /> <AiFillStar />
          <AiFillStar /> <BsStarHalf /> <AiOutlineStar />
        </div>
        <span className="card__rating__number">3.5</span>
      </div>
    </div>
  );
}
