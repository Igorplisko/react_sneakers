import React from 'react'
// import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'


function App() {
  let [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false)


  React.useEffect(() => {
    fetch('https://60ed8027a78dc700178adf66.mockapi.io/items')
      .then((res) => {
        return res.json();

      }).then((json) => {
        setItems(json)
      });
  }, []);



  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <CartDrawer onClose={() => setCartOpened(false)} /> : null} */}
      {cartOpened && <CartDrawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {/* <Card title={"Nike mens sneakers Air max"} price={140} imageUrl="/img/sneakers/1.jpg" />
          <Card title={"Nike mens sneakers Blazer"} price={170} imageUrl="/img/sneakers/2.jpg" />

          {/* <Card /> */}

          {items.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
            // onClick={() => console.log(obj)} 
            />

          ))}



        </div>
      </div>
      ...
    </div >
  );
}

export default App;


//? && если левая часть будет положительна только тогдла будет выполняться правая часть 







// const arr = [

//   {
//     "title": "Nike men sneakers Air max",
//     "price": 150,
//     "imageUrl": "/img/sneakers/1.jpg"
//   },
//   {
//     "title": "Nike men sneakers Blazer",
//     "price": 170,
//     "imageUrl": "/img/sneakers/2.jpg"
//   },
//   {
//     "title": "Nike men sneakers 2-18",
//     "price": 145,
//     "imageUrl": "/img/sneakers/3.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Just original",
//     "price": 160,
//     "imageUrl": "/img/sneakers/4.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Sport",
//     "price": 137,
//     "imageUrl": "/img/sneakers/5.jpg"
//   },
//   {
//     "title": "Nike mens sneakers Nike Kyrie 7",
//     "price": 167,
//     "imageUrl": "/img/sneakers/6.jpg"
//   },
//   {
//     "title": "Nike mens sneaker X",
//     "price": 127,
//     "imageUrl": "/img/sneakers/7.jpg"
//   },
//   {
//     "title": "Nike mens sneakers leBro",
//     "price": 181,
//     "imageUrl": "/img/sneakers/8.jpg"
//   }

// ]