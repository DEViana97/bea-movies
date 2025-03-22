'use client'

import React from 'react'
import MovieList from '../../components/movieList/MovieList';

export default function MoviesPage() {
  const [type, setType] = React.useState<'movie' | 'tv'>('movie');
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', width: '100%', padding: '20px' }}>
        <button onClick={() => setType('movie')}>Filmes</button>
        <button onClick={() => setType('tv')}>Séries</button>
      </div>
      {type !== 'tv' && (
        <MovieList
          type={type}
          title="Próximos Lançamentos"
          searchBy="upcoming"
          layout="flex"
        />
      )}
      {type !== 'tv' && (
        <MovieList
          type={type}
          title="Now Playing"
          searchBy="now_playing"
          layout="flex"
        />
      )}
      <MovieList
        type={type}
        title="Popular"
        searchBy="popular"
        layout="flex"
      />
      <MovieList
        type={type}
        title="Top Rated"
        searchBy="top_rated"
        layout="flex"
      />
    </div>
  )
}
