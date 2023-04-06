import {IReviewState, ReviewActionTypes} from '../types/review'

const initialState: IReviewState = {
  reviews: [],
  currentId: null,
}

export const review = (state = initialState, action: any): IReviewState => {
  switch (action.type) {
    case ReviewActionTypes.GET_REVIEWS_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      }
    case ReviewActionTypes.SET_REVIEWS_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(review => review.id === action.payload.id ? action.payload : review)
      }
    case ReviewActionTypes.SET_CURRENT_ID_REVIEW:
      return {
        ...state,
        currentId: action.payload
      }
    default: return state
  }
}