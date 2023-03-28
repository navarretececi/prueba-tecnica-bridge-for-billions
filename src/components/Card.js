import "./Card.css";
import Btn from "./bnt/Btn";
import React from "react";
import  { useEffect, useState } from "react";
import { AppContext } from "../resultContext";


const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const { result } = React.useContext(AppContext);

  useEffect(() => {
    setShowInfo(false)
  }, [result])

  const handlerShowInfo = (id) => {
    let btn = document.getElementById(id);
    
    if (btn.innerText === "More info") {
      btn.innerText = "Hide info";
    } else btn.innerText = "More info";
    setShowInfo(!showInfo);
  };

  const addToCollection =(id)=>{
    const request = {
      method: 'POST',
      headers: {
        Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq"
      },
    };
    fetch (
      //`/users/{username}/collection/folders/{folder_id}/releases/{release_id}`
      `https://api.discogs.com/users/navarretececi/collection/folders/1/releases/${id}`,
      request
      )
      .then((response) => response.json())
      .then((data) => {
        console.log("info add ", data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="card">
      <div className="row">
        <div className="row">
          <Btn btn_text="+" onClick={() => addToCollection(props.id)} />
        </div>
        <Btn
          id={`btn_${props.id}`}
          btn_text="More info"
          onClick={() => handlerShowInfo(`btn_${props.id}`)}
        />
      </div>

      <div className="principal_info">
        <h5 className="title">{props.title}</h5>
        <img
          className="img"
          src={props.url ? props.url : "./music.svg"}
          alt="photo disk"
        />
      </div>

      {showInfo ? (
        <div>
          {props.artist ? <h6>Artist: {props.artist}</h6> : null}
          {props.format ? (
            <h6>
              Format:{" "}
              {props.format.map((e) => {
                return e + " - ";
              })}
            </h6>
          ) : null}
          {props.genre ? (
            <h6>
              Genre:{" "}
              {props.genre.map((e) => {
                return e + " - ";
              })}
            </h6>
          ) : null}
          {props.label ? (
            <h6>
              Label:{" "}
              {props.label.map((e) => {
                return e + " - ";
              })}
            </h6>
          ) : null}
          {props.type ? <h6>Type: {props.type}</h6> : null}
          {props.trackinfo ? <h6>Trackinfo: {props.trackinfo}</h6> : null}
          {props.year ? <h6>Year: {props.year}</h6> : null}
          {props.country ? <h6>Country: {props.country}</h6> : null}
          {props.style ? (
            <h6>
              Style:{" "}
              {props.style.map((e) => {
                return e + " - ";
              })}
            </h6>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
