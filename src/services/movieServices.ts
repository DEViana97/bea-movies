import { Params } from '../interface/params';
import { api } from './api';

export const movieService = {
  getMovies: async (params?: Params) => {
    const cleanParams = params
      ? Object.fromEntries(
          Object.entries(params).filter(([_, value]) => value != null && value !== '')
        )
      : {};
      const queryString = new URLSearchParams(cleanParams).toString();
    const url = params ? `/api/movies?${queryString}` : '/api/movies';
    return await api.get(url);
  },
  getMoviesTMDB: async (type: string, searchBy: string ,params?: Params) => {
    const cleanParams = params
      ? Object.fromEntries(
          Object.entries(params).filter(([_, value]) => value != null && value !== '')
        )
      : {};
      const queryString = new URLSearchParams(cleanParams).toString();
    const url = params ? `/${type}/${searchBy}?${queryString}` : `/${type}/${searchBy}?${queryString}`;
    return await api.getMoviesTMDB(url);
  },
  getAllTrendingTMDB: async () => {
    return await api.getMoviesTMDB('/trending/all/week?language=pt-BR');
  },
  addMovieToWatchLater: async (data: any) => {
    return await api.post(`/api/movies`, data);
  },
  removeMovieFromWatchLater: async (id: number) => {
    return await api.delete(`/api/movies/${id}`);
  },
  
};