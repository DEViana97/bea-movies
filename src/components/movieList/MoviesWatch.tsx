import React, { Suspense, useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import Pagination, { ItemsPerPage } from "../pagination/Pagination";
import HamsterLoading from "../hamsterLoading/HamsterLoading";
import useFetchMovies from "../../hooks/useFetchMovies";
import { MovieContainer, MovieListContainer, MovieListWrapper } from "./MovieList.styled";
import { MovieTMDB } from "../../interface/movie";

interface MovieListProps {
  type: string;
  searchBy: string;
  title?: string;
  layout?: "grid" | "flex";
}

function MovieListWatch({
  layout = "grid",
  type,
  searchBy,
  title,
}: MovieListProps) {
  const { loadingData, moviesTMDB, moviesList, metaData, fetchMoviesList } = useFetchMovies(type, searchBy);
  const [moviesWatched, setMoviesWatched] = useState<MovieTMDB[]>([]);

  const [activePaginationPage, setActivePaginationPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.twenty);

  useEffect(() => {
    fetchMoviesList({ status: false });
  }, []);

  useEffect(() => {
   const newList = moviesList.map((movie) => {
      const formatMovie = {
        id: movie.id,
        title: movie.name,
        name: movie.name,
        overview: '',
        backdrop_path: movie.image,
        poster_path: movie.image,
        vote_average: movie.starRating,
      };
      return formatMovie;
    });
    setMoviesWatched(newList);

  }, [moviesList])


  return (
    <Suspense fallback={<HamsterLoading />}>
      {loadingData ? (
        <HamsterLoading />
      ) : (
        <MovieListContainer>
        <MovieContainer $layout={layout}>
          {layout === 'flex' && <h1>{title}</h1>}
          <MovieListWrapper $layout={layout}>
            {moviesWatched.map((movie) => (
              <MovieCard moviesWatched={moviesList} key={movie.id} movie={movie} />
            ))}
          </MovieListWrapper>
          {layout === "grid" && (
            <Pagination
              currentPage={activePaginationPage}
              setCurrentPage={setActivePaginationPage}
              totalItens={metaData.total_results}
              itemsPerPage={itemsPerPage}
            />
          )}
        </MovieContainer>
        </MovieListContainer>
      )}
    </Suspense>
  );
}

export default MovieListWatch;
