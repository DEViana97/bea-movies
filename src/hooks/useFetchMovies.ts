import { useState, useEffect, useCallback } from 'react';
import { movieService } from '../services/movieServices';
import { Params } from '../interface/params';
import { Movie } from '../interface/movie';


export default function useFetchMovies(type: string, params?: Params) {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loadingData, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [moviesTMDB, setMoviesTMDB] = useState<any[]>([]);
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
    [type, params]
  );

  const fetchTMDBMoviesList = useCallback(
    async (type: string, params?: Params) => {
      setLoading(true);
      try {
        const response = await movieService.getMoviesTMDB(type, {...params, language: 'pt-BR'});
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
    [type, params] // 🔥 Removemos `type` das dependências
  );
  useEffect(() => {
    fetchTMDBMoviesList(type);
  }, [fetchTMDBMoviesList ]);
    

    useEffect(() => {
      fetchMoviesList();
    }, [fetchMoviesList]); 

  return { loadingData, error, fetchMoviesList, moviesList, moviesTMDB, fetchTMDBMoviesList, metaData };
}