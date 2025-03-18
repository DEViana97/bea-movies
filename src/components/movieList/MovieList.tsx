import React from 'react'
import { MovieTMDB } from '../../interface/movie'
import MovieCard from '../movieCard/MovieCard';

interface MovieListProps {
  movies: MovieTMDB[];
}
function MovieList({movies}: MovieListProps) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw'}}>
      <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 200px)', gap: '16px', listStyle: 'none', width: '90vw', justifyContent: 'end', alignItems: 'center', padding: '20px 0'}}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList