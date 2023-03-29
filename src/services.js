export const search = async (url) => {
  let response = await fetch(url, {
    headers: {
      Authorization: `Discogs token=${process.env.REACT_APP_API_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return response;
};

export const addToCollection = async (id) => {
  const request = {
    method: "POST",
    headers: {
      Authorization: `Discogs token=${process.env.REACT_APP_API_TOKEN}`,
    },
  };

  let response = await fetch(
    `https://api.discogs.com/users/navarretececi/collection/folders/1/releases/${id}`,
    request
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return response;
};

export const showCollection = async (url) => {
  const request = {
    method: "GET",
    headers: {
      Authorization: `Discogs token=${process.env.REACT_APP_API_TOKEN}`,
    },
  };
  let response = await fetch(url, request)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  return response;
};
