import "./Main.css";
import Card from "./Card";
import Notification from "./Notification";
import { useState, useEffect } from "react";

const Main = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`https://api.discogs.com/database/search?q=Nirvana`, {
      headers: {
        Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("result", result);

  return (
    <main className="main">
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
