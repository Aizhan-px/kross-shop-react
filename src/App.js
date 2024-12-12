import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';




function App() {
  const[ items, setItems] =React.useState([]);
  const[ cartItems, setCartItems] =React.useState([]);
  const [ cartOpened, setCartOpened]= React.useState(false);


React.useEffect(()=> {
  fetch('https://9cc1f27e4d4eeb08.mokky.dev/itemss')
  .then((res)=>{
   return res.json();
 })
 .then((json) => {
   setItems(json);
  });
}, []);

const onAddToCart = (obj) => {
  setCartItems(prev => [...cartItems,obj]);
};


  return (
    <div className="wrapper clear">
    {cartOpened && <Drawer  items= { cartItems } onClose={() => setCartOpened(false)}/> }
    <Header onClickCart={()=> setCartOpened(true)} />
     <div className="contenet  p-40"> 
      <div className="d-flex align-center  justify-between mb-41">
         <h1 > Все кросcовки</h1>
      <div className="search-block d-flex">
        <img  src="./img/search.png" alt="Search"/>
        <input placeholder="Поиск..."/>
      </div>
   </div>

      <div className="d-flex felx-wrap">
        {items.map((item)=> (
          <Card
           tittle={item.title}
           price= {item.price} 
           imageUrl= {item.imageUrl}
           onFavorit= { () => console.log ('Добавить в закладки')}
           onPlus ={(obj) => console.log (obj)}
            />
         ))}    
     </div>
    </div>
 </div>
  );
}

export default App;
