import React from 'react';
import Card from './Card';

const CardList = ({products}) => {

const handleAlert = x => alert(x) ;




    return (
        <div id="card_list">
 {   products.map((el,i)=>(

<Card key={i} name={el.name} price={el.price} image={el.image} description={el.description} Alert={handleAlert}/>                                

 ))




}
            
        </div>
    )
}

export default CardList
