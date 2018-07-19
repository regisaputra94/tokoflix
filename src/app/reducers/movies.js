const initialState = {
  movies: []
}

export const Movies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LATEST_MOVIES':
      const latestMovies = state.movies.concat(action.payload.movies)
      return { ...state, movies: latestMovies }

    default:
      return state
  }
}