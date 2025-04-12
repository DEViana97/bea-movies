import React, { Suspense, useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import Pagination, { ItemsPerPage } from "../pagination/Pagination";
import HamsterLoading from "../hamsterLoading/HamsterLoading";
import useFetchMovies from "../../hooks/useFetchMovies";
import { MovieContainer, MovieListContainer, MovieListWrapper } from "./MovieList.styled";

interface MovieListProps {
  type: string;
  searchBy: string;
  title?: string;
  layout?: "grid" | "flex";
}

function MovieList({
  layout = "grid",
  type,
  searchBy,
  title,
}: MovieListProps) {
  const { loadingData, moviesTMDB, moviesList, metaData } = useFetchMovies(type, searchBy);

  const [activePaginationPage, setActivePaginationPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.twenty);


  return (
    <Suspense fallback={<HamsterLoading />}>
      {loadingData ? (
        <HamsterLoading />
      ) : (
        <MovieListContainer>
        <MovieContainer $layout={layout}>
          {layout === 'flex' && <h1>{title}</h1>}
          <MovieListWrapper $layout={layout}>
            {moviesTMDB.map((movie) => (
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

export default MovieList;
