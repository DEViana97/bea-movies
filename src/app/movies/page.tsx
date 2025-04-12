'use client'

import React from 'react'
import MovieList from '../../components/movieList/MovieList';
import EmblaCarousel from '../../components/carousel/Carousel';
import useFetchMovies from '../../hooks/useFetchMovies';

export default function MoviesPage() {
  const [type, setType] = React.useState<'movie' | 'tv'>('movie');
  const { moviesTMDB, loadingData, moviesList } = useFetchMovies(type, 'popular');
  return (
    <>
      <EmblaCarousel
        movies={moviesTMDB}
        loadingData={loadingData}
        moviesWatched={moviesList}
      />
      {type !== 'tv' && (
        <MovieList
          type={type}
          title="Próximos Lançamentos"
          searchBy="upcoming"
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
      <MovieList
        type={'tv'}
        title="Top Rated Series"
        searchBy="top_rated"
        layout="flex"
      />
    </>
  )
}
