'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie, MovieTMDB } from '../../interface/movie'
import StarRating from '../starRating/StarRating'
import useMovieActions from '../../hooks/useMovieActions'

interface MovieSlideProps {
  movie: MovieTMDB;
  moviesWatched?: Movie[];
}

const MovieSlide = ({ movie, moviesWatched }: MovieSlideProps) => {
  const { addMovie, removeMovie } = useMovieActions();
  const [isMarked, setIsMarked] = useState<boolean>(false);

  useEffect(() => {
    if (moviesWatched) {
      const isMovieMarked = moviesWatched.some((item) => item.id === movie.id);
      setIsMarked(isMovieMarked);
    }
  }, [moviesWatched, movie.id]);

  const handleAddToWatchLater = () => {
    setIsMarked(!isMarked);
    const movieData = {
      id: movie.id,
      description: movie.overview || null,
      name: movie.title || movie.name,
      image: movie.poster_path,
    };
    if (!isMarked) {
      addMovie(movieData);
    } else {
      removeMovie(movie.id);
    }
  }

  return (
    <div className="embla__slide">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {movie.backdrop_path && (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_TMDB_HOST}${movie.backdrop_path}`}
            fill
            quality={100}
            priority
            alt={movie.title || movie.name}
          />
        )}
      </div>
      <div className="embla__slide__content">
        <h1 style={{ fontSize: '1.5rem' }}>{movie.title || movie.name}</h1>
        <StarRating rating={movie.vote_average} />
        <p>
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 200)}...`
            : movie.overview}
        </p>
        <div className="buttons__container">
          <button style={buttonStyle}>Detalhes</button>
          <button style={buttonStyle} onClick={handleAddToWatchLater}>{isMarked ? 'Adicionado' : 'Assistir Mais Tarde'}</button>
        </div>
      </div>
    </div>
  )
}

const buttonStyle = {
  padding: '.5rem 1rem',
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  borderRadius: '5px',
}

export default MovieSlide
