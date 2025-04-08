import { useState } from 'react';
import { movieService } from '../services/movieServices';


export default function useMovieActions() {
  const [movie, setMovie] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addMovie = async (movie: any) => {
    try {
      const res = await movieService.addMovieToWatchLater(movie)
      if (!res) {
        throw new Error('Erro ao criar usuário');
      }
      setMovie(res)
      return res
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeMovie = async (movieId: number) => {
    try {
      const data = await movieService.removeMovieFromWatchLater(movieId)
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  // const updateUser = async (updatedUser: UserCreate, id: string) => {
  //   try {
  //     const data = await userService.updateUser(updatedUser, id)
  //     setUsers(data);
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return {
    addMovie,
    loading,
    error,
    movie,
    removeMovie
  };
}
