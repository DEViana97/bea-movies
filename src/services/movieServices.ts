import { Params } from '../interface/params';
import { api } from './api';

export const movieService = {
  getMovies: async (params?: Params) => {
    const url = params ? `/api/movies?${params}` : '/api/movies';
    return await api.get(url);
  },
  getMoviesTMDB: async (type: string, params?: Params) => {
    const cleanParams = params
      ? Object.fromEntries(
          Object.entries(params).filter(([_, value]) => value != null && value !== '')
        )
      : {};
      const queryString = new URLSearchParams(cleanParams).toString();
    const url = params ? `/${type}?${queryString}` : `/${type}?${queryString}`;
    return await api.getMoviesTMDB(url);
  }
};