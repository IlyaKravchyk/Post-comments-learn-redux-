import { Comments } from './Comments/Comments';
import { Likes } from './Likes/Likes';
import style from './Main.module.scss';

export const Main = () => {
   return (
      <main className={style.main}>
         <div className='container'>
            <div className={style.maimWrapper}>
               <div className={style.likes}>
                  <div className={style.image}>
                     <img src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="photo" />
                  </div>
                  <Likes />
               </div>
               <Comments />
            </div>
         </div>
      </main>
   )
}