import React from 'react'
import Image from 'next/image'
import { MovieTMDB } from '../../interface/movie';
import StarRating from '../starRating/StarRating';
import { Button } from '../button/Button';
import { MovieCardContainer, MovieHiddenInfo, MovieImage, MovieImageContainer, MovieInfo } from './MovieCard.styled';

interface CardProps {
  movie: MovieTMDB;
}

export default function MovieCard({ movie }: CardProps) {
  return (
    <MovieCardContainer>
      <MovieImageContainer>
        <MovieImage
          src={movie.poster_path ? `${process.env.NEXT_PUBLIC_IMAGE_TMDB_HOST}${movie.poster_path}` : '/default-image.svg'}
          alt={movie.overview}
          height={250}
          width={400}
          priority
        />
      </MovieImageContainer>
      <MovieInfo>
        <p>{movie.title}</p>
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
