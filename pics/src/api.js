import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gHT07K42YIxAtTecR-a9yDqS3pxBhNwvhTCoIEgu8Yk",
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;
