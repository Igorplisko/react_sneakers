import React from 'react'
import axios from 'axios'
// import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'


function App() {
  let [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])
  // const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')

  const [cartOpened, setCartOpened] = React.useState(false)


  React.useEffect(() => {
    axios.get('https://60ed8027a78dc700178adf66.mockapi.io/items').then((res) => {
      setItems(res.data)
    });

    axios.get('https://60ed8027a78dc700178adf66.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://60ed8027a78dc700178adf66.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeInputSearchInput = (event) => {
    // console.log(event.target.value)
    setSearchValue(event.target.value)

  }

  const onRemoveItem = (id) => {
    // axios.delete('https://60ed8027a78dc700178adf66.mockapi.io/cart${id}')
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }



  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <CartDrawer onClose={() => setCartOpened(false)} /> : null} */}
      {cartOpened && <CartDrawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1> {searchValue ? `Search by request! ${searchValue}` : 'All sneakers'} </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && < img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />}
            <input placeholder="Search..." onChange={onChangeInputSearchInput} value={searchValue} />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {/* <Card title={"Nike mens sneakers Air max"} price={140} imageUrl="/img/sneakers/1.jpg" />
          <Card title={"Nike mens sneakers Blazer"} price={170} imageUrl="/img/sneakers/2.jpg" />

          {/* <Card /> */}

          {items
            .filter(item => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Add to bookmarks ')}
                // onPlus={onAddToCart}
                onPlus={onAddToCart}
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