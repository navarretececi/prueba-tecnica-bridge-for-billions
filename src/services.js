export const search = async (input) => {
  let response = await fetch(
    `https://api.discogs.com/database/search?q=${input}&{?title,release_title,artist}`,
    {
      headers: {
        Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.log(error));

  return response;
};
