

function Card (props) {
    console.log(props);
    return(
        <div className="card">
        <div>
        <img  className='favorite' src={("/src/img/heart-unliked.png")}/>
        </div>
        <img width={133} hidden={112} src={props.imageUrl}  alt="sneakers"/>
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column ">
           <span> Цена:</span>
            <b>{props.price} руб</b>
           </div>
          <button  className="button" onClick={props.onClick}>
            <img width={11} height={11} src={("/src/img/plus.png")} alt="plus"></img>
          </button>
         </div>
      </div>
 
    )
}

export default Card;

