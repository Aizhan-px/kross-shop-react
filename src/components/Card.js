

function Card () {
    return(
        <div className="card">
        <div>
        <img  className='favorite' src={require("../img/heart-unliked.png")}/>
        </div>
        <img width={133} hidden={112} src={require("../img/sneakers/sneak1.png")}  alt="sneakers"/>
         <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column ">
           <span>Цена:</span>
            <b>12 999 руб</b>
           </div>
          <button className="button">
            <img width={11} height={11} src={require("../img/plus.png")}alt="plus"></img>
          </button>
         </div>
      </div>
 
    )
}

export default Card;

{/* <div className="card">
<div>
<img  className='favorite' src={heart}/>
</div>
<img width={133} hidden={112} src="./img/sneakers/sneakers-1.jpg" alt="sneakers"/>
 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
 <div className="d-flex justify-between align-center">
   <div className="d-flex flex-column ">
   <span>Цена:</span>
    <b>12 999 руб</b>
   </div>
  <button className="button">
    <img width={11} height={11} src="./img/plus.svg" alt="plus"></img>
  </button>
 </div>
</div>

<div className="card">
<img width={133} hidden={112} src="./img/sneakers/sneakers-2.jpg" alt="sneakers"/> 
 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
 <div className="d-flex justify-between align-center">
   <div className="d-flex flex-column ">
   <span>Цена:</span>
    <b>12 999 руб</b>
   </div>
  <button className="button">
    <img width={11} height={11} src="./img/plus.svg" alt="plus"></img>
  </button>
 </div>
</div>

<div className="card"> 
 <img width={133} hidden={112} src="./img/sneakers/sneakers-3.jpg" alt="sneakers"/> 
 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
 <div className="d-flex justify-between align-center">
   <div className="d-flex flex-column ">
   <span>Цена:</span>
    <b>12 999 руб</b>
   </div>
  <button className="button">
    <img width={11} height={11} src="./img/plus.svg" alt="plus"></img>
  </button>
 </div>
</div>

<div className="card"> 
<img width={133} hidden={112} src="./img/sneakers/sneakers-4.jpg" alt="sneakers"/>
 <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
 <div className="d-flex justify-between align-center">
   <div className="d-flex flex-column ">
    <span>Цена:</span>
    <b>12 999 руб</b>
   </div>
  <button className="button">
    <img width={11} height={11} src="./img/plus.svg" alt="plus"></img>
  </button>
 </div>
</div>  */}


