'use client'
import React from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import HamsterLoading from '../../components/hamsterLoading/HamsterLoading';
import Card from '../../components/movieCard/MovieCardTest';
import MovieList from '../../components/movieList/MovieList';

export default function MoviesPage() {
  const { moviesList, fetchMoviesList, loadingData, moviesTMDB } = useFetchMovies('movie');

  if (loadingData) {
    return <HamsterLoading />
  }
  return (

    <MovieList movies={moviesTMDB} />

  )
}
