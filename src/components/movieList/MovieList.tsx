import React from 'react'
import { MovieTMDB } from '../../interface/movie'
import MovieCard from '../movieCard/MovieCard';

interface MovieListProps {
  movies: MovieTMDB[];
}
function MovieList({movies}: MovieListProps) {
  return (
    <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 200px)', gap: '16px', listStyle: 'none', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '1rem 0'}}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList