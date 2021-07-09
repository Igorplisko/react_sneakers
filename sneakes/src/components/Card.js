import React from 'react'

function Card() {
   return (

      <div className="card">

         <div className="favorite">
            <img src="/img/unliked.svg" alt="Unliked" />
         </div>


         {/* <img src="/img/liked.svg" alt="Unliked" /> */}
         <img width={113} height={112} src="/img/sneakers/1.jpg" alt="" />
         <h5>Nike mens sneakers</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex  flex-column ">
               <p>Prise:</p>
               <b> 500 $</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
         </div>
      </div>

   )
}

export default Card
