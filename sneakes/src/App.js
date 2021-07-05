// import logo from '../public/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <svg />
          <div className="headerInfo">
            <h3> React Sneakers</h3>
            <p>Shop for the best sneakers</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>205 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default App;
