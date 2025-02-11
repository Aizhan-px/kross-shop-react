import React from 'react';
import styles from './Card.module.scss';




function Card ({ title, imageUrl, price, onFavorit, onPlus}) {
    const[isAdded,setIsAdded]= React.useState(false);
    
    const onClickPlus= () => {
      onPlus(title, imageUrl, price);
      setIsAdded(!isAdded);
    };

    return(
        <div className={styles.card}>
        <div className={styles.favorite} onClick = {onFavorit}>
          <img src="/img/heart-unliked.png" alt='unliked'/>
        </div>
        <img  width={133} height={112}  src={imageUrl}  alt="sneakers"/>
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column ">
           <span> Цена:</span>
            <b>{price} руб</b>
           </div>
          
        <img className={styles.plus} 
            onClick={onPlus}  
            src= {isAdded ? '/img/checked.svg' : '/src/img/plus.svg'}
            alt="plus"></img>

         </div>
      </div>
 
    )
}

export default Card;

