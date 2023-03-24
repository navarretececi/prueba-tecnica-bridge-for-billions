import './Main.css'
import Card from './Card';
import { useState, useEffect } from "react";

const Main = () => {
    const [disks, setDisks] = useState([]);

    useEffect(() => {
      fetch(`
          https://api.discogs.com/artists/1/releases?page=2&per_page=75
        `)
        .then((response) => response.json())
        .then((data) => {
          setDisks(data.releases);
          console.log("data", data);
          console.log("length RELEASES", data.releases.length);
          console.log("data.releases", data.releases);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <main className="main">
      {disks.length > 0
        ? disks.map((disk) => {
            return (
              <Card
                id={disk.id}
                title={disk.title}
                artist={disk.artist}
                format={disk.format}
                role={disk.role}
                type={disk.type}
                trackinfo={disk.trackinfo}
                year={disk.year}
              />
            );
          })
        : null}
    </main>
  );
};

export default Main
