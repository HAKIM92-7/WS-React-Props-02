import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types' ;

const Card = ({name,price,image,description,Alert}) => {
    return (
        <div>
            <div className="wrapper" onClick = {()=>Alert(name)}>
  <div className="container">
    <div className="top">
        <img src={image} alt="error" style={{width:"100%" , height:"100%"}}/>
    </div>
    <div className="bottom">
      <div className="left">
        <div className="details">
          <h5>{name }</h5>
          <p>{price} <span>DT</span></p>
        </div>
      
      </div>
      <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div className="remove"><i className="material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div className="inside">
    <div className="icon"><i className="fas fa-info"></i></div>
    <div className="contents">
      <p>{description}</p>
    </div>
  </div>
</div>
        </div>
    )
}

Card.propTypes ={

name : PropTypes.string ,

price : PropTypes.string ,
image : PropTypes.string ,
description : PropTypes.string ,
Alert : PropTypes.func


}

Card.defaultProps ={

name : "Anonymes" ,
price:"free" ,
description:"no description",
image :"logo192.png"

}

export default Card
