'use client'

import React from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import MovieList from '../../components/movieList/MovieList';

export default function MoviesPage() {
  const {loadingData, moviesTMDB, fetchTMDBMoviesList, metaData } = useFetchMovies('movie');
  return (
      <MovieList 
      movies={moviesTMDB} 
      type="movie" 
      fetchMoviesList={fetchTMDBMoviesList} 
      metaData={metaData}
      loadingData={loadingData} 
       />
  )
}
