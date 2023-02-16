import style from './ButtonAction.module.scss';

export const ButtonAction = ({ children, action }) => {

   const cliclHandler = () => action()

   return (
      <div className={style.action}>
         <button className={style.buttonAction} onClick={cliclHandler}>
            {children}
         </button>
      </div >
   )
}