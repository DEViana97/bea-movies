'use client'

import React from 'react'
import MovieList from '../../components/movieList/MovieList';
import EmblaCarousel from '../../components/carousel/Carousel';
import useFetchMovies from '../../hooks/useFetchMovies';

export default function MoviesPage() {
  const [type, setType] = React.useState<'movie' | 'tv'>('movie');
  const { moviesTMDB, loadingData } = useFetchMovies(type, 'popular');
  return (
    <> 
        <EmblaCarousel
        movies={moviesTMDB}
        loadingData={loadingData}
        />
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
      </>
  )
}
