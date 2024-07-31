

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 const key = `ade27947f0b6183fa7f925f0eaf6e23a`;
 const movieBaseUrl = `https://api.themoviedb.org/3`;
export const MovieApiSlice=createApi({

  tagTypes: ["movie"],
  reducerPath: "Movie",
  baseQuery: fetchBaseQuery({ baseUrl: movieBaseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (arg) => ({
        url: `trending/${arg.type}/week/?api_key=${key}`, 
      
      }),
    }),
    getTrending: builder.query({
      query: (arg) => ({
        url: `discover/${arg.type}?api_key=${key}`
      
      }),
   
      }),
      getMoviesPerson: builder.query({
        query: (arg) => ({
          url: `person/popular?api_key=${key}`, 
        
        }),

    }),
    getDetails: builder.query({
      query: (arg) => ({
        url: `${arg.type}/${arg.id}?api_key=${key}`
      }),
    }),
    searchMovies: builder.query({
      query: (query) => `search/movie?api_key=${key}&query=${query}`,
    }),
})

})
export const {useGetMoviesQuery,useGetTrendingQuery,useGetMoviesPersonQuery,useGetDetailsQuery,useSearchMoviesQuery}=MovieApiSlice
