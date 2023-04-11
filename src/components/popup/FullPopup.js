import "./FullPopup.css";
import React from "react";

const FullPopup =(props)=>{
 let data = props.data

    return(
        <div className="container_popup">
            <div className="popup">
                <div className="container_XBtn">
                    <span onClick={props.onClick} className="xBtn">x</span>
                </div>
                <div className="container_release_info">
                    <img className="img" src={data.thumb? data.thumb : "./music.svg"} alt={data.alt}/>
                    <div className="mg_left15">
                        <h6><span className="pink_text">Title: </span> {data.title}</h6>
                        <h6><span className="pink_text">Artist: </span> {data.artists_sort}</h6>
                        <h6><span className="pink_text">Lowest price: </span> {data.lowest_price? `${data.lowest_price} €` :"-"}</h6>
                        <h6><span className="pink_text">Genre: </span> {data.genres ? data.genres.map((e) => {return e + " - ";}) : "-"}</h6>
                        <h6><span className="pink_text">Format: </span>{data.formats ? data.formats.map((e) => {return e.name + " - ";}) : "-"}</h6>
                        <h6><span className="pink_text">Released: </span>{data.released}</h6>
                        <h6><span className="pink_text">Trackinfo: </span>{data.tracklist ? data.tracklist.map((e) => {return e.title + " - ";}) : "-"}</h6>
                        <h6><span className="pink_text">Year: </span>{data.year}</h6>
                        <h6><span className="pink_text">Country: </span>{data.country}</h6>
                        <h6><span className="pink_text">Style: </span>{data.styles ? data.styles.map((e) => {return e + " - ";}) : "-"}</h6>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default FullPopup