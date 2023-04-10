import "./FullPopup.css";
import React from "react";
import { AppContext } from "../resultContext";

const FullPopup =(props)=>{
    const { setShowInfo } = React.useContext(AppContext);
    const data = props.data
    console.log(data)
    return(
        <div className="container_popup">
            <div className="popup">
                <div className="container_XBtn">
                    <span onClick={props.onClick} className="xBtn">x</span>
                </div>
                <img className="img" src={data.url} alt={data.alt}/>
                <h6>Title: {data.title}</h6>
                <h6>Artist: {data.artist}</h6>
                <h6>Format: {data.format.map((e) => {return e + " - ";})}</h6>
                <h6>Genre: {data.genre.map((e) => {return e + " - ";})}</h6>
                <h6>Label: {data.label.map((e) => {return e + " - ";})}</h6>
                <h6>Type: {data.type}</h6>
                <h6>Trackinfo: {data.trackinfo}</h6>
                <h6>Year: {data.year}</h6>
                <h6>Country: {data.country}</h6>
                <h6>Style: {data.style.map((e) => {return e + " - ";})}</h6>
            </div>
      </div>
    )
}

export default FullPopup