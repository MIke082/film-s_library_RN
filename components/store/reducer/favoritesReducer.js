const isFavoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return state.filter(film => film.id !== action.payload.id)
  }
  return state;
};

export default isFavoriteReducer;