import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE, REMOVE_ALL_TO_FAVORITE, REMOVE_LAST_TO_FAVORITE } from '../typeActions';

const handlers = {
  [ADD_TO_FAVORITE]: (state, { item }) => ({ ...state, favList: [...state.favList, item] }),
  [REMOVE_TO_FAVORITE]: (state, { id }) => ({ ...state, favList: [...state.favList.filter(fav => fav.id !== id)] }),
  [REMOVE_LAST_TO_FAVORITE]: (state) => ({ ...state, favList: [...state.favList.shift()] }),
  [REMOVE_ALL_TO_FAVORITE]: (state) => ({ ...state, favList: [] }),
  DEFAULT: state => state
}

export default function (state, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
}
