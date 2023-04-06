export interface IAnswers {
  id: string
  name: string
  email: string
  date: number | string
  comment: string
  like: ILike
  dislike: IDislike
  noted: string[]
}

export interface ILike {
  quantity: number
  isLike: boolean
}

export interface IDislike {
  quantity: number
  isDislike: boolean
}

export interface IImages {
  id: string
  url: string
  name: string
  size: number
}

export interface IReviews {
  id: string
  name: string
  email: string
  star: number
  date: number | string
  comment: string
  dignity: string
  flaws: string
  images: IImages[]
  like: ILike
  dislike: IDislike
  noted: string[]
  answers: IAnswers[]
  productId: number
}

export interface IReviewState {
  reviews: IReviews[]
  currentId: number | string | null
}

export enum ReviewActionTypes {
  GET_REVIEWS_REVIEW = 'GET_REVIEWS_REVIEW',
  SET_REVIEWS_REVIEW = 'SET_REVIEWS_REVIEW',
  SET_CURRENT_ID_REVIEW = 'SET_CURRENT_ID_REVIEW'
}

interface IGetReviewsAction {
  type: ReviewActionTypes.GET_REVIEWS_REVIEW,
  payload: IReviews
}

interface ISetReviewsAction {
  type: ReviewActionTypes.SET_REVIEWS_REVIEW,
  payload: IReviews
}

interface ISetCurrentIdAction {
  type: ReviewActionTypes.SET_CURRENT_ID_REVIEW,
  payload: number | string
}

export type ReviewAction = IGetReviewsAction | ISetReviewsAction | ISetCurrentIdAction