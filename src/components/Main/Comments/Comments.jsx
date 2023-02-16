import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addComment } from '../../../redux/actionCreators/commentsCreators';
import { SingleComment } from './SingleComment/SingleComment';


import style from './Comments.module.scss';

export const Comments = () => {

   const [text, setText] = useState('');

   const dataComments = useSelector(state => state.commentsReducer.comments)
   const dispatch = useDispatch()


   const changeHandler = (e) => setText(e.target.value);

   const submitHandler = (e) => {
      e.preventDefault()
      const id = Math.floor(Math.random() * 100)
      dispatch(addComment(text, id))
      setText('')
   }

   return (
      <div className={style.comments}>
         <form action="#" className={style.commenstForm} onSubmit={submitHandler}>
            <input type="text" className={style.fieldComments} value={text} onChange={changeHandler} placeholder='Enter a comment' />
         </form>
         {!!dataComments.length && dataComments.map(item => {
            return <SingleComment key={item.id} commentData={item} />
         })}
      </div>
   )
}
