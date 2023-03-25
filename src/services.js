export const search = async () => {
  let response = await fetch(
    `https://api.discogs.com/database/search?q=Nirvana`,
    {
      headers: {
        Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
      //setResult(data.results);
    })
    .catch((error) => console.log(error));

  return response;
};
