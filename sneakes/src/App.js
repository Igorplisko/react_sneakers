// import logo from '../public/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <svg />
          <div className="headerInfo">
            <h3> React Sneakers</h3>
            <p>Shop for the best sneakers</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>205 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
          </li>
        </ul>
      </header>
      <div className="content"></div>
    </div>
  );
}

export default App;
