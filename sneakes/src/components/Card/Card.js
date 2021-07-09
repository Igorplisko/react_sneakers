import React from 'react'
import styles from './Card.module.scss'

console.log(styles);

function Card(props) {


   return (

      <div className={styles.card}>

         <div className={styles.favorite}>
            <img src="/img/unliked.svg" alt="Unliked" />
         </div>


         {/* <img src="/img/liked.svg" alt="Unliked" /> */}
         <img width={113} height={112} src={props.imageUrl} alt="" />
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex  flex-column ">
               <span>Price:</span>
               <p>{props.price} </p>
               <b>Somthing</b>
            </div>
            <button className="button" onClick={props.onClickPlus}>
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
         </div>
      </div>

   )
}

export default Card
