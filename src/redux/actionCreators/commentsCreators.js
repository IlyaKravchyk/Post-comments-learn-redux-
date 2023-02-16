import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../types/commentTypes';

export const addComment = (commentText, id) => {
   return {
      type: ADD_COMMENT,
      data: {
         commentText,
         id
      }
   }
}

export const updateComment = (newComment, id) => {
   return {
      type: UPDATE_COMMENT,
      data: {
         commentText: newComment,
         id
      }
   }
}

export const deleteComment = (id) => {
   return {
      type: DELETE_COMMENT,
      id
   }
} 