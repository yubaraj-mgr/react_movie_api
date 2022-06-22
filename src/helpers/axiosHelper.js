import axios from "axios";

const apiEndPoint = "https://www.omdbapi.com/?i=tt3896198&apikey=f64df59f&";
export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};









