export const search = async (url) => {
  let response = await fetch(url, {
    headers: {
      Authorization: "Discogs token=naLZrQwSiepVEgdldAJfdwVpLkSQCmxPGSUItYyq",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return response;
};
