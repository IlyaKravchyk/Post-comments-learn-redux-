import { LIKES_INCREMENT, LIKES_DECREMENT } from "../types/likesTypes";

export const likesIncrement = (countStep) => {
   return {
      type: LIKES_INCREMENT,
      payload: countStep
   }
}

export const likesDecrement = (countStep) => {
   return {
      type: LIKES_DECREMENT,
      payload: countStep
   }
}