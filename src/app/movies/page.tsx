'use client'
import React from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import HamsterLoading from '../../components/hamsterLoading/HamsterLoading';
import Card from '../../components/movieCard/MovieCardTest';

export default function MoviesPage() {
  const { moviesList, fetchMoviesList, loadingData } = useFetchMovies();

  if (loadingData) {
    return <HamsterLoading />
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Card movies={moviesList} />
    </div>
  )
}
