import React, { Suspense, useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import Pagination, { ItemsPerPage } from "../pagination/Pagination";
import HamsterLoading from "../hamsterLoading/HamsterLoading";
import { MovieContainer, MovieListContainer, MovieListWrapper } from "./MovieList.styled";
import { MovieTMDB } from "../../interface/movie";

interface MovieListProps {
  type: string;
  searchBy: string;
  title?: string;
  layout?: "grid" | "flex";
  handleSearch?: (term: string) => void;
  moviesTMDB: MovieTMDB[];
  loadingData: boolean;
  metaData: {
    page: number;
    total_pages: number;
    total_results: number;
  }
  fetchTMDBMoviesList: (type: string, searchBy: string, params?: any) => Promise<void>;
}

function MovieSearchList({
  layout = "grid",
  type,
  searchBy,
  title,
  loadingData,
  moviesTMDB,
  metaData,
  fetchTMDBMoviesList,
}: MovieListProps) {

  const [activePaginationPage, setActivePaginationPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.twenty);


  useEffect(() => {
    fetchTMDBMoviesList(type, searchBy, {
      page: activePaginationPage,
    });
  }, [activePaginationPage]);


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
                <MovieCard key={movie.id} movie={movie} />
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

export default MovieSearchList;
