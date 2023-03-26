export const search = async (input) => {
  let response = await fetch(
    `https://api.discogs.com/database/search?title=${input}&per_page=16&page=10`,
    {
      headers: {
        Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return response;
};
