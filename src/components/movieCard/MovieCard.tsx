import React from 'react'
import Image from 'next/image'
import { MovieTMDB } from '../../interface/movie';
import styled from 'styled-components';
import StarRating from '../starRating/StarRating';

interface CardProps {
  movie: MovieTMDB;
}

const MovieCardContainer = styled.li`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.1);
  }

  &:hover .hidden-info {
    height: 100px;
    opacity: 1;
  }
  `

const MovieImage = styled(Image)`
transition: .3s;
opacity: 1;

`

const MovieImageContainer = styled.div`


`

const MovieInfo = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: end;
padding: 10px;
background: linear-gradient(#00000000, #000 90%);
& > p {
  font: 12px;
  color: #fff;
}

`

const MovieHiddenInfo = styled.div`
color: #fff;
font-size: 12px;
margin-top: 8px;
height: 0;
opacity: 0;
transition: all.3s;
`

export default function MovieCard({movie}: CardProps) {
  return (
    <MovieCardContainer>
      <MovieImageContainer>
        <MovieImage
          src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/default-image.svg'}
          alt={movie.title}
          height={200}
          width={200}
          style={{objectFit: 'cover'}}
          priority
        />
      </MovieImageContainer>
      <MovieInfo>
        <p>{movie.title}</p>
          <StarRating rating={movie.vote_average} />
        <MovieHiddenInfo className="hidden-info">
          {movie.overview && <p>{movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}` : movie.overview}</p>}
          <button>Ver mais</button>
        </MovieHiddenInfo>
      </MovieInfo>
    </MovieCardContainer>
  )
}
