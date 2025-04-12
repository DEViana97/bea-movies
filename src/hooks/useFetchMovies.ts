import { useState, useEffect, useCallback } from 'react';
import { movieService } from '../services/movieServices';
import { Params } from '../interface/params';
import { Movie, MovieTMDB } from '../interface/movie';


export default function useFetchMovies(type: string, searchBy: string ,params?: Params) {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loadingData, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [moviesTMDB, setMoviesTMDB] = useState<MovieTMDB[]>([]);
  const [metaData, setMetaData] = useState<{
    page: number;
    total_pages: number;
    total_results: number;
  }>({
    page: 1,
    total_pages: 1,
    total_results: 0,
  });


  const fetchMoviesList = useCallback(
    async (params?: Params) => {
      setLoading(true);
      try {
        const response = await movieService.getMovies(params);
        console.log(response.data);
        setMoviesList(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching event types');
      } finally {
        setLoading(false);
      }
    },
    [params]
  );

  useEffect(() => {
    fetchMoviesList();
  }, [fetchMoviesList]);

  const fetchTMDBMoviesList = useCallback(
    async (type: string, searchBy: string ,params?: Params) => {
      setLoading(true);
      try {
        const response = await movieService.getMoviesTMDB(type, searchBy, {...params, language: 'pt-BR'});
        console.log(response);
        setMoviesTMDB(response.results);
        setMetaData({
          page: response.page,
          total_pages: response.total_pages,
          total_results: response.total_results,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching event types");
      } finally {
        setLoading(false);
      }
    },
    [type, searchBy, params] // 🔥 Removemos `type` das dependências
  );
  useEffect(() => {
    fetchTMDBMoviesList(type, searchBy);
  }, [fetchTMDBMoviesList ]);

  const fetchTrendingAllTMDB = useCallback(
    async () => {
      setLoading(true);
      try {
        const response = await movieService.getAllTrendingTMDB();
        console.log(response);
        setMoviesTMDB(response.results);
        setMetaData({
          page: response.page,
          total_pages: response.total_pages,
          total_results: response.total_results,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching event types");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchTrendingAllTMDB();
  }, [fetchTrendingAllTMDB]);
     

  return { loadingData, error, fetchMoviesList, moviesList, moviesTMDB, fetchTMDBMoviesList, metaData, fetchTrendingAllTMDB };
}