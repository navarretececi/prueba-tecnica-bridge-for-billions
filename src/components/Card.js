import "./Card.css";
import Btn from "./bnt/Btn";
import React from "react";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import { AppContext } from "../resultContext";
import { addToCollection } from "../services";
import { limitCharacters } from "../utils/functions";

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [added, setAdded] = useState(false);
  const { result, inputSearched } = React.useContext(AppContext);

  useEffect(() => {
    setShowInfo(false);
  }, [result]);

  const handlerAdd = (id) => {
    addToCollection(id)
      .then((data) => {
        setAdded(true);
        setTimeout(() => {setAdded(false);}, 1000);
      })
      .catch((error) => {console.log(error);});
  };

  return (
    <div className="card">
      {added ? <Popup text="Added" /> : null}
      <div className="row">
        <div className="row">
          {inputSearched === "Collection All" ? null : (
            <Btn btn_text="+" onClick={() => handlerAdd(props.id)} />
          )}
        </div>
        <Btn
          id={`btn_${props.id}`}
          btn_text={showInfo ? "Hide info" : "More info"}
          onClick={() => setShowInfo(!showInfo)}
        />
      </div>

      <div className="principal_info">
        <h5 className="title">{limitCharacters(props.title, 100)}</h5>
        <img
          className="img"
          src={props.url ? props.url : "./music.svg"}
          alt={props.title}
        />
      </div>

      {showInfo ? (
        <div>
          <h6>Title: {props.title}</h6>
          <h6>Artist: {props.artist}</h6>
          <h6>Format: {props.format.map((e) => {return e + " - ";})}</h6>
          <h6>Genre: {props.genre.map((e) => {return e + " - ";})}</h6>
          <h6>Label: {props.label.map((e) => {return e + " - ";})}</h6>
          <h6>Type: {props.type}</h6>
          <h6>Trackinfo: {props.trackinfo}</h6>
          <h6>Year: {props.year}</h6>
          <h6>Country: {props.country}</h6>
          <h6>Style: {props.style.map((e) => {return e + " - ";})}</h6>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
