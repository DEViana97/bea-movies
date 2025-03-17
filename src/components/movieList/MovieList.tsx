import React from 'react'
import { MovieTMDB } from '../../interface/movie'
import MovieCard from '../movieCard/MovieCard';

interface MovieListProps {
  movies: MovieTMDB[];
}
function MovieList({movies}: MovieListProps) {
  return (
    <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '0', listStyle: 'none', width: '100%'}}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList