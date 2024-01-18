import React from "react";
import "./searchItem.css";
import { useNavigate } from "react-router-dom";

export default function SearchItem(props) {
  const {
    id,
    imgSrc,
    title,
    distance,
    taxiOp,
    subtitle,
    features,
    rating,
    price,
  } = props;
  const navigate = useNavigate();

  return (
    <div
      className="searchItem"
      onClick={() => {
        navigate("/hotels/" + id, { state: props });
      }}
    >
      <img src={imgSrc} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">{taxiOp}</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rating}</span>
          <button>{props.ratingValue}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">Included Taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}
