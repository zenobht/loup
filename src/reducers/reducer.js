import { FETCH_RECIPIES } from '../constants/contants'

const initailState = {
  recipes: [],
}

export default function(state = initailState, action) {
  switch (action.type) {
    case FETCH_RECIPIES: {
      return { ...state, recipes: action.payload.data }
    }
    default:
      return state
  }
}
