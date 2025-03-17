import { Params } from '../interface/params';
import { api } from './api';

export const movieService = {
  getMovies: async (params?: Params) => {
    const url = params ? `/api/movies?${params}` : '/api/movies';
    return await api.get(url);
  },
  getMoviesTMDB: async (type: string, params?: Params) => {
    const url = params ? `/${type}?${params}&language=pt-BR` : `/${type}?&language=pt-BR`;
    return await api.getMoviesTMDB(url);
  }
};