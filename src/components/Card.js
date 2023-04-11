import "./Card.css";
import Btn from "./bnt/Btn";
import React from "react";
import Popup from "./popup/Popup";
import { useEffect, useState } from "react";
import { AppContext } from "../resultContext";
import { addToCollection, get_release_by_id } from "../services";
import { limitCharacters } from "../utils/functions";
import FullPopup from "./popup/FullPopup";

const Card = (props) => {
  const [added, setAdded] = useState(false);
  const { result, inputSearched } = React.useContext(AppContext);
  const [releaseInfo, setReleaseInfo] = useState({});

  useEffect(() => {
    setReleaseInfo({});
  }, [result]);

  const handlerAdd = (id) => {
    //The API allows you to add duplicate releases to the collection, 
    //so it is not limited to this service.
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

  const handlerGetReleaseById = (id) => {
    //I search the release by id and get all the information.
    get_release_by_id(id)
      .then((data) => {
        setReleaseInfo(data)
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
              btn_text="Add"
              onClick={() => handlerAdd(props.id)}
            />
          )}
        </div>
        <Btn
          id={`btn_${props.id}`}
          btn_text="More Info"
          onClick={() => handlerGetReleaseById(props.id)}
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

      {Object.keys(releaseInfo).length > 0 ? (
        <FullPopup data={releaseInfo} onClick={() => setReleaseInfo({})} />
      ) : null}
    </div>
  );
};

export default Card;
