import { useSelector, useDispatch } from 'react-redux';
import { likesDecrement, likesIncrement } from '../../../redux/actionCreators/likesCreators';

import { ButtonAction } from './ButtonAction/ButtonAction';

import style from './Likes.module.scss';

export const Likes = () => {

   const likesCount = useSelector(state => state.likesReducer.likes)
   const dispatch = useDispatch()

   const handlerIncrementLikes = () => dispatch(likesIncrement(1))
   const handlerDecrementLikes = () => dispatch(likesDecrement(1))

   return (
      <div className={style.likes}>

         <ButtonAction action={handlerIncrementLikes}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
         </ButtonAction>
         <span className={style.likes}>
            {likesCount}
         </span>

         {!!likesCount && <ButtonAction action={handlerDecrementLikes}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
         </ButtonAction>}
      </div >
   )
}