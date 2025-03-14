import { useState, useEffect, useCallback } from 'react';
import { movieService } from '../services/movieServices';
import { Params } from '../interface/params';
import { Movie } from '../interface/movie';


export default function useFetchMovies() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loadingData, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


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

    useEffect(() => {
      fetchMoviesList();
    }, [fetchMoviesList]); 

  return { loadingData, error, fetchMoviesList, moviesList };
}