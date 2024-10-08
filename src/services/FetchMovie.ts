import { useQuery } from "react-query";

import api from "./api";

import { MovieType } from "../common/types";

type FetchMovieById = (movieId: string) => Promise<MovieType>;

const fetchMovie: FetchMovieById = async (movieId: string) => {
  const response = await api.get(
    `/movie/${movieId}?api_key=e73946490b0b3631155bdbe4467e8198`
  );

  return response.data;
};


const useFetchMovieById = (movieId: string) =>
  useQuery(["movie", movieId], () => fetchMovie(movieId));


export default useFetchMovieById;