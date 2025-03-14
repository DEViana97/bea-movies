'use client'
import React from 'react'
import useFetchMovies from '../../hooks/useFetchMovies'
import MovieCard from '../../components/movieCard/MovieCard';
import HamsterLoading from '../../components/hamsterLoading/HamsterLoading';

export default function MoviesPage() {
  const { moviesList, fetchMoviesList, loadingData } = useFetchMovies();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        {loadingData && <HamsterLoading />}
        <MovieCard
          movies={moviesList}
        />
      </div>
    </div>
  )
}
