import "./Main.css";
import Card from "./Card";
import Notification from "./Notification";
import React from "react";
import { AppContext } from "../resultContext";

const Main = () => {
  const { result } = React.useContext(AppContext);

  return (
    <main className="main">
      {result === undefined ? (
        <Notification notification="Please search for results" />
      ) : result.length > 0 ? (
        result.map((e, index) => {
          return (
            <Card
              key={index}
              id={e.id}
              title={e.title}
              url={e.thumb}
            />
          );
        })
      ) : (
        <Notification notification="No results found" />
      )}
    </main>
  );
};

export default Main;
