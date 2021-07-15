import React from 'react'
import styles from './Card.module.scss'

console.log(styles);

function Card({ imageUrl, title, price, onPlus, onFavorite }) {
   const [isAdedd, setISAdded] = React.useState(false)

   const onClickPlus = () => {
      onPlus({ imageUrl, title, price });
      setISAdded(!isAdedd)
   }




   return (

      < div className={styles.card} >

         <div className={styles.favorite} onClick={onFavorite}>
            <img src="/img/unliked.svg" alt="Unliked" />
         </div>


         {/* <img src="/img/liked.svg" alt="Unliked" /> */}
         <img width={113} height={112} src={imageUrl} alt="" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex  flex-column ">
               <span>Price:</span>
               <p>{price} $</p>
               <b>Somthing</b>
            </div>
            <img classNAme={styles.plus} onClick={onClickPlus} src={isAdedd ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
         </div>
      </div >

   )
}

export default Card
