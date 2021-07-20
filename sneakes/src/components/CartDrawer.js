import React from 'react'

function CartDrawer({ onClose, onRemove, items = [] }) {
   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Cart
               <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
            </h2>

            {
               items.length > 0 ? (
                  <div className="items">
                     {
                        items.map((obj) => (
                           <div className="cartItem d-flex align-center mb-20">
                              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                              <div className="mr-20 flex">
                                 <p className="mb-5">{obj.title}</p>
                                 <b>500 $</b>
                              </div>
                              <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                           </div>))
                     }
                     <div />  :   (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img src="/img/empty-cart.jpg" className="mb-20" width='120px' height='120px' alt="Wht this" />
                        <h2>Cart is empty</h2>
                        <p className="opacity-6">Add at least one pair of sneakers to order!</p>
                        <button className="greenButton">
                           <img src="/img/arrow.svg" alt="Arrow" /> Come back
                        </button>
                     </div>)

            }




                     <div className="cartTotalBlock">
                        <ul >
                           <li >
                              <span>Total:</span>
                              <div></div>
                              <b>1100 $</b>
                           </li>
                           <li >
                              <span>Tax 5%:</span>
                              <div></div>
                              <b> 70 $</b>
                           </li>
                        </ul>
                        <button className="greenButton">Place your order
                           <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                     </div>
                  </div>
               
         </div>
      </div>
   )
}

export default CartDrawer
