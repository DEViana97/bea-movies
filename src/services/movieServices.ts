import { Params } from '../interface/params';
import { api } from './api';

export const movieService = {
  getMovies: async (params?: Params) => {
    const url = params ? `/api/movies?${params}` : '/api/movies';
    return await api.get(url);
  },
  getMoviesTMDB: async (type: string, params?: Params) => {
    const newParams = new URLSearchParams(params);
    newParams.append('language', 'pt-BR');
    const url = params ? `/${type}?${newParams}` : `/${type}?${newParams}`;
    return await api.getMoviesTMDB(url);
  }
};