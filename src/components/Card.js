import "./Card.css";
import Btn from "./bnt/Btn";
import React from "react";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import { AppContext } from "../resultContext";
import { addToCollection } from "../services";
import { limitCharacters } from "../utils/functions";
import FullPopup from "./FullPopup";

const Card = (props) => {
  const [added, setAdded] = useState(false);
  const { result, inputSearched } = React.useContext(AppContext);
  const [diskInfo, setDiskInfo] = useState({});

  const handlerInfo = () => {
    setDiskInfo({
      url: props.url,
      alt: props.alt,
      title: props.title,
      artist: props.artist,
      format: props.format,
      genre: props.genre,
      label: props.label,
      type: props.type,
      trackinfo: props.trackinfo,
      year: props.year,
      country: props.country,
      style: props.style,
    });
  };

  useEffect(() => {
    setDiskInfo({});
  }, [result]);

  const handlerAdd = (id) => {
    addToCollection(id)
      .then((data) => {
        setAdded(true);
        setTimeout(() => {
          setAdded(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card">
      {added ? <Popup text="Added" /> : null}
      <div className="row">
        <div className="row">
          {inputSearched === "Collection All" ? null : (
            <Btn
              btn_text="Add to collection"
              onClick={() => handlerAdd(props.id)}
            />
          )}
        </div>
        <Btn
          id={`btn_${props.id}`}
          btn_text="More Info"
          onClick={() => handlerInfo()}
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

      {Object.keys(diskInfo).length > 0 ? (
        <FullPopup data={diskInfo} onClick={() => setDiskInfo({})} />
      ) : null}
    </div>
  );
};

export default Card;
