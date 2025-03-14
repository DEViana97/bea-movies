import React from 'react'
import { Movie } from '../../interface/movie'
import StarRating from '../starRating/StarRating';

interface MovieCardProps {
  movies: Movie[];
}

export default function MovieCard({ movies }: MovieCardProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {movies.map((movie) => {
        return (
          <div
            style={{
              background: 'black',
              borderRadius: '8px',
              padding: '1rem',
            }}
            key={movie.id}
          >
            <img
              src={movie.image}
              alt={movie.name}
              width={200}
              height={200}
            />
            <p style={{ color: 'white', fontWeight: 'bold' }}>{movie.name}</p>
            <p style={{ color: 'white' }}>
              {movie.status ? 'Assistido' : 'Não assistido'}
            </p>
            <StarRating disabled rating={Math.floor(movie.starRating)} />
          </div>
        );
      })}
    </div>
  );
}