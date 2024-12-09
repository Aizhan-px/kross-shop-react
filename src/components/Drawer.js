import Button from "../img/btn-remove.png";
 function Drawer() {
    return (
        <div  style={{ display: 'none'}} className="overlay">
        <div className="drawer">
        <h3 className="d-flex justify-between mb-30 cu-p">
          Корзина<img className="cu-p" src={require("../img/btn-remove.png")} alt=""></img>
        </h3>
    
        <div className="items">
        <div className="cartItem d-flex align-center mb-20">
        <div style={{backgroundImage:'url(../img/sneakers/sneak1.png)'}} 
             className="cartItemImg"> </div>
          <div className="mr-20 flex" >
            <p cassName="mb-5"> Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src={require("../img/btn-remove.png")} alt="remove"/></div>

        <div className="cartItem d-flex align-center mb-20">
        <div style={{backgroundImage:'url(../img/sneakers/sneak1.png)'}} 
             className="cartItemImg"></div>

          <div className="mr-20 flex" >
            <p className="mb-5"> Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src={require("../img/btn-remove.png")} alt="remove"></img>
        </div>
        
   <div className="cartTotalBlock">
  <ul>
  <li >
    <span>Итого: </span>
    <div></div>
      <b>21 498 руб. </b>
  </li>
  <li >
    <span> Налог 5%:  </span>
    <div></div>
    <b>1074 руб. </b>
  </li>
 </ul>
  <button className="greenButton">Оформить заказ<img src="./img/arrow.svg" alt="Arrow"></img></button>
  </div>
 </div>
 </div>
 </div>

    );
}
    export default Drawer;