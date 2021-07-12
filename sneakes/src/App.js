// import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'


const arr = [
  { name: "Nike mens sneakers Air max", price: '150$', imageUrl: "/img/sneakers/1.jpg" },
  { name: "Nike mens sneakers Blazer", price: '170$', imageUrl: "/img/sneakers/2.jpg" },
  { name: "Nike mens sneakers Mide Sueda", price: '145$', imageUrl: "/img/sneakers/3.jpg" },
  { name: "Nike mens sneakers Just original", price: '160$', imageUrl: "/img/sneakers/4.jpg" },
  { name: "Nike mens sneakers Sport", price: '137$', imageUrl: "/img/sneakers/5.jpg" }
]

function App() {


  return (
    <div className="wrapper clear">



      <CartDrawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {/* <Card title={"Nike mens sneakers Air max"} price={140} imageUrl="/img/sneakers/1.jpg" />
          <Card title={"Nike mens sneakers Blazer"} price={170} imageUrl="/img/sneakers/2.jpg" />

          {/* <Card /> */}

          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}

              onClickPlus={() => console.log(obj)} />

          ))}



        </div>
      </div>
      ...
    </div >
  );
}

export default App;
