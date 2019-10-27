import { FETCH_RECIPIES } from '../constants/contants'
import API from '../api/api'

const fetchRecipies = data => ({
  type: FETCH_RECIPIES,
  payload: { data },
})

export const fetchRecipiesAsync = () => {
  return dispatch => {
    API.fetch().then(data => {
      dispatch(fetchRecipies(data.contents))
    })
  }
}
