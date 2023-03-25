import "./Main.css";
import Card from "./Card";
import Notification from "./Notification";
import BtnSearch from "./bnt/BtnSearch";
import React from "react";
import { AppContext } from "../resultContext";
const Main = () => {
  const {result} = React.useContext(AppContext);

  return (
    <main className="main">
        <BtnSearch />
      {result.length > 0 ? (
        result.map((e, index) => {
          return (
            <Card
              //The index is used instead of the ID because I found some repeated ids.
              key={index}
              title={e.title}
              url={e.thumb}
              artist={e.artist}
              format={e.format}
              genre={e.genre}
              label={e.label}
              type={e.type}
              trackinfo={e.trackinfo}
              year={e.year}
              country={e.country}
              style={e.style}
            />
          );
        })
      ) : (
        <Notification notification="Please search for results" />
      )}
    </main>
  );
};

export default Main;
