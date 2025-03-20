import React, { Suspense, useEffect, useState } from 'react'
import { MovieTMDB } from '../../interface/movie'
import MovieCard from '../movieCard/MovieCard';
import Pagination, { ItemsPerPage } from '../pagination/Pagination';
import { Params } from '../../interface/params';
import HamsterLoading from '../hamsterLoading/HamsterLoading';


interface MovieListProps {
  movies: MovieTMDB[];
  type: string;
  fetchMoviesList: (type: string, params?: Params) => void;
  metaData: any;
  loadingData: boolean;
}
function MovieList({ movies, type, fetchMoviesList, metaData, loadingData }: MovieListProps) {
  const [activePaginationPage, setActivePaginationPage] = useState(1);
  const [searchBoxQuery, setSearchBoxQuery] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage.twenty);


  useEffect(() => {
    fetchMoviesList(type, {
      page: activePaginationPage,
    })
  }, [activePaginationPage]);

  // if (loadingData) {
  //   return <HamsterLoading />
  // }



  return (
    <Suspense fallback={<HamsterLoading />}>
      {loadingData ? (
        <HamsterLoading />) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw' }}>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 200px)', gap: '16px', listStyle: 'none', width: '90vw', justifyContent: 'end', alignItems: 'center', padding: '20px 0' }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <Pagination
            currentPage={activePaginationPage}
            setCurrentPage={setActivePaginationPage}
            totalItens={metaData.total_results}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </Suspense>
  )
}

export default MovieList