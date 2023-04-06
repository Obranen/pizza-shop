import {IReviews, ReviewAction, ReviewActionTypes} from '../types/review'

export const getReviewsActionReview = (review: IReviews): ReviewAction => {
  return {type: ReviewActionTypes.GET_REVIEWS_REVIEW, payload: review}
}

export const setReviewsActionReview = (review: IReviews): ReviewAction => {
  return {type: ReviewActionTypes.SET_REVIEWS_REVIEW, payload: review}
}

export const setCurrentIdActionReview = (currentId: number | string): ReviewAction => {
  return {type: ReviewActionTypes.SET_CURRENT_ID_REVIEW, payload: currentId}
}