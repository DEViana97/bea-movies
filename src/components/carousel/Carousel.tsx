'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Movie, MovieTMDB } from '../../interface/movie'
import MovieSlide from '../movieSlide/MovieSlide'

const CarouselContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background: rgb(247,168,196);
background: linear-gradient(0deg, rgba(247,168,196,1) 0%, rgba(243,113,153,1) 100%);
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

& .embla__viewport {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  height: 80vh;
  width: 95%;
  overflow: hidden;

  @media (max-width: 820px) {
  }
  /* Small devices such as large phones (640px and up) */


/* Medium devices such as tablets (768px and up) */
@media only screen and (max-width: 768px) {
  height: 40vh;
}

/* Large devices such as laptops (1024px and up) */
@media only screen and (max-width: 1024px) {
  height: 50vh;
}

/* Largest devices such as desktops (1280px and up) */
@media only screen and (min-width: 1280px) {
  height: 80vh;
}


  /* @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 500px) {
    height: 30vh;
  } */
}

& .embla__container {
  display: flex;
  height: 100%;
}
& .embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & .embla__slide__content {
    z-index: 2;
    position: absolute;
    color: white;
    width: 350px;
    left: 2rem;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .5rem;

    @media (max-width: 550px) {
      width: 100%;

      & .buttons__container {
        display: flex;
        flex-direction: column;
      }

      p {
        display: none;
      }
    }

    & .buttons__container {
      display: flex;
      gap: 1rem;
    }
  }


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    z-index: 1;
  }
}



@media (max-width: 768px) {
  /* padding-left: 40px; */ 
  
}

@media (max-width: 500px) {
  /* padding-left: 60px; */
}
`

interface EmblaCarouselProps {
  movies: MovieTMDB[];
  loadingData?: boolean;
  moviesWatched?: Movie[];
}

function EmblaCarousel({ movies, loadingData, moviesWatched }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <CarouselContainer className='embla'>
      <button>
        <ChevronLeft onClick={scrollPrev} size={40} color='white' style={{ cursor: 'pointer' }} />
      </button>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movies.map((movie) => (
            <MovieSlide moviesWatched={moviesWatched} key={movie.id} movie={movie} />
          ))
          }
        </div>
      </div>
      <button>
        <ChevronRight onClick={scrollNext} size={40} color='white' style={{ cursor: 'pointer' }} />
      </button>
    </CarouselContainer>
  )
}

export default EmblaCarousel;
