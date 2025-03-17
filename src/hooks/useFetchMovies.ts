import { useState, useEffect, useCallback } from 'react';
import { movieService } from '../services/movieServices';
import { Params } from '../interface/params';
import { Movie } from '../interface/movie';


export default function useFetchMovies(type: string) {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loadingData, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [moviesTMDB, setMoviesTMDB] = useState<any[]>([]);


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
    []
  );

  const fetchTMDBMoviesList = useCallback(
    async (type: string, params?: Params) => {
      setLoading(true);
      try {
        const response = await movieService.getMoviesTMDB(type,params);
        console.log(response);
        setMoviesTMDB(response.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching event types');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchTMDBMoviesList(type);
  }, [fetchTMDBMoviesList]);

    useEffect(() => {
      fetchMoviesList();
    }, [fetchMoviesList]); 

  return { loadingData, error, fetchMoviesList, moviesList, moviesTMDB };
}