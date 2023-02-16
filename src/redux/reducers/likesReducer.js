import { LIKES_DECREMENT, LIKES_INCREMENT } from "../types/likesTypes";
import { initialState } from '../initialState';

export const likesReducer = (state = initialState, action) => {
   switch (action.type) {
      case LIKES_INCREMENT: return {
         ...state,
         likes: state.likes + action.payload
      };
      case LIKES_DECREMENT: return {
         ...state,
         likes: state.likes - action.payload
      };
      default: return state
   }
}