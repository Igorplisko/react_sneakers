// import logo from '../public/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">




      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">

          <h2 className="d-flex justify-between mb-30">Cart
            <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>


          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">Nike mens sneakers</p>
                <b>500 $</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />

            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">Nike mens sneakers</p>
                <b>500 $</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />

            </div>

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




      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
          <svg />
          <div >
            <h3 className="text-uppercase "> React Sneakers</h3>
            <p className="opacity-5">Shop for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span><b>205 $</b></span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>




        <div className="d-flex">

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


          <div className="card">
            <img width={113} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5>Nike mens sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex  flex-column ">
                <p>Prise:</p>
                <b> 790 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

        </div>

      </div>
      ...
    </div >
  );
}

export default App;
