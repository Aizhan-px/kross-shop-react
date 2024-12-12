import logo from "../img/logo.svg";
import cart from '../img/cart.svg';
import heart from '../img/heart.svg'
import  user from '../img/user.svg'

function Header (props){
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img src={require("../img/logo.png")} width={50} height={50} />
        <div className="headerInfo">
          <h3 className="test-uppercase "> KROSS STORE </h3>
          <p className="opacity-6 ">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li  onClick={props.onClickCart}  className ='mr-5 cu-p'>
        <img width={18} height={18} src={cart}  />
          <span>1205 руб.</span>
        </li>
  
        <li>
       <img width={18} height={18} src={heart} />
       <p>Закладки</p>
        </li>
  
        <li>
        <img width={18} height={18} src={user} />
        <p>Профиль</p>
        </li>
  
      </ul>
       </header>

      );
}
 
export default Header;