export interface Movie {
  id: number;
  name: string;
  image: string;
  status: boolean;
  starRating: number;
}

export interface MovieTMDB {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}