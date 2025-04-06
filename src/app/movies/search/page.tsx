'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../../../components/input/InputSimple'
import { InputTypes } from '../../../components/input/Input'
import useFetchMovies from '../../../hooks/useFetchMovies'
import MovieSearchList from '../../../components/movieList/MovieSearchList'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { fetchTMDBMoviesList, loadingData, moviesTMDB, metaData } = useFetchMovies('discover', 'movie');

  const handleSearch = useDebouncedCallback((
    term: string) => {
    setSearchValue(term);
    fetchTMDBMoviesList('search', 'multi', { query: term });
  }, 300);

  useEffect(() => {
    if (searchValue.length === 0) {
      fetchTMDBMoviesList('discover', 'movie');
    }
  }, [searchValue])

  return (
    <div style={{ padding: '70px 0' }}>
      <div>
        <Input
          typeInput={InputTypes.terciary}
          placeholder="Pesquisar Filmes"
          name="search"
          id="search"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchValue}
        />
      </div>
      <MovieSearchList
        type='discover'
        title="Resultados da Pesquisa"
        searchBy="movie"
        layout="grid"
        moviesTMDB={moviesTMDB}
        loadingData={loadingData}
        metaData={metaData}
        fetchTMDBMoviesList={fetchTMDBMoviesList}
      />
    </div>
  )
}
