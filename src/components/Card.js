import "./Card.css";
import Btn from "./bnt/Btn";
import { useState } from "react";

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const handlerShowInfo = (id) => {
    let btn = document.getElementById(id);
    if (btn.innerText === "More info") {
      btn.innerText="Hide info";
    } else btn.innerText="More info";

    setShowInfo(!showInfo);
  };

  return (
    <div key={props.id} className="card">
      <Btn
        id={`btn_${props.id}`}
        btn_text="More info"
        onClick={() => handlerShowInfo(`btn_${props.id}`)}
      />
      <h4>{props.title}</h4>
      {showInfo ? (
        <div>
          <h6>Artist: {props.artist}</h6>
          <h6>Format: {props.format}</h6>
          <h6>Role: {props.role}</h6>
          <h6>Type: {props.type}</h6>
          <h6>Trackinfo: {props.trackinfo}</h6>
          <h6>Year: {props.year}</h6>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
