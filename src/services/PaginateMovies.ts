import { useQuery } from "react-query";

import api from "./api";

import { MovieType } from "../common/types";

type PaginateFetch = (page: number) => Promise<MovieType[]>;

const fetchPaginatedMovies: any = async (page = 1) => {
  const {data}  = await api.get(
   "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  console.log("data::::",data)

  return data.results;
};

const usePaginatedFetchMovies = (page: number) =>
  useQuery(["movies", page], () => fetchPaginatedMovies(page), {
    keepPreviousData: true,
  });

export default usePaginatedFetchMovies;