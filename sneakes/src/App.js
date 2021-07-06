// import logo from '../public/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <svg />
          <div className="headerInfo">
            <h3 className="text-uppercase"> React Sneakers</h3>
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
            <img width={113} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5>Nike mens sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex  flex-column ">
                <p>Prise:</p>
                <b>7 990 $</b>
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
                <b>7 990 $</b>
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
