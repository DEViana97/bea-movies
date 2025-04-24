'use client'

import React from 'react'
import MovieListWatch from '../../../components/movieList/MoviesWatch'

function WatchLaterPage() {
  return (
    <div style={{height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem'}}>
      <MovieListWatch
      type='movie'
      title='Assistir depois'
      searchBy='watch_later'
      />
    </div>
  )
}

export default WatchLaterPage