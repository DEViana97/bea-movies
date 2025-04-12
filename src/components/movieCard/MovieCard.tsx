'use client'

import React, { useEffect, useState } from 'react'
import { Movie, MovieTMDB } from '../../interface/movie';
import StarRating from '../starRating/StarRating';
import { Button } from '../button/Button';
import { MovieCardContainer, MovieHiddenInfo, MovieImage, MovieImageContainer, MovieInfo } from './MovieCard.styled';
import { Bookmark } from 'lucide-react';
import useMovieActions from '../../hooks/useMovieActions';

interface CardProps {
  movie: MovieTMDB;
  moviesWatched?: Movie[];
}

export default function MovieCard({ movie, moviesWatched }: CardProps) {
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
    <MovieCardContainer>
      <span onClick={handleAddToWatchLater} className='watch-later' title='Assistir mais tarde'>
        <Bookmark fill={isMarked ? '#F7A8C4' : 'transparent'} color={isMarked ? 'none' : 'white'} />
      </span>
      <MovieImageContainer>
        <MovieImage
          src={movie.poster_path ? `${process.env.NEXT_PUBLIC_IMAGE_TMDB_HOST}${movie.poster_path}` : '/default-image.svg'}
          alt={movie.title || movie.name}
          height={250}
          width={400}
          priority
        />
      </MovieImageContainer>
      <MovieInfo>
        <p>{movie.title || movie.name}</p>
        <StarRating rating={movie.vote_average} />
        {movie.overview &&
          <MovieHiddenInfo className="hidden-info">
            <p className='movie-description'>{movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}</p>
            <Button variant='primary' width='100px' height='35px'>Ver mais</Button>
          </MovieHiddenInfo>}
      </MovieInfo>
    </MovieCardContainer>
  )
}
