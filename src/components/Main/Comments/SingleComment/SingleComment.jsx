import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment, deleteComment } from '../../../../redux/actionCreators/commentsCreators';

import style from './SingleComment.module.scss';

export const SingleComment = ({ commentData }) => {

   const { commentText, id } = commentData
   const [text, setText] = useState('')
   const dispatch = useDispatch()

   const changeHandler = (e) => {
      setText(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateComment(text, id))
   }

   const deleteHandler = () => {
      dispatch(deleteComment(id))
   }

   useEffect(() => {
      if (commentText) {
         setText(commentText)
      }
   }, [commentText])

   return (
      <div className={style.wrapper}>
         <div className={style.comment}>
            <div className={style.deleteComment} id={id} onClick={deleteHandler}>
               <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <form className={style.form} onSubmit={submitHandler} onChange={changeHandler}>
               <input className={style.input} type='text' defaultValue={text} />
            </form>
         </div>
      </div>
   )
}