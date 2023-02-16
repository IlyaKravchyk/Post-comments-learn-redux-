import { initialState } from '../initialState';
import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../types/commentTypes';

export const commentsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_COMMENT: return {
         ...state,
         comments: [...state.comments, action.data]
      }
      case UPDATE_COMMENT:
         const newCommentsData = state.comments.map(item => {
            if (item.id === action.data.id) {
               return {
                  ...item,
                  commentText: action.data.commentText
               }
            } else {
               return item
            }
         })
         return {
            ...state,
            comments: [...newCommentsData]
         }

      case DELETE_COMMENT:
         const newComments = state.comments.filter(item => item.id !== action.id)

         return {
            ...state,
            comments: [...newComments]
         }

      default: return state
   }
}
