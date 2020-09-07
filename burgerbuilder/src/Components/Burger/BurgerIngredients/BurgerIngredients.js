import React from 'react';
import  './BurgerIngredients.css';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) =>{

  
    
      switch(props.type){
        case "bread-bottom":
           return <div className="BreadBottom"> a</div>
        case "bread-top":
          return (
             <div className="BreadTop">
                <div className="classes.Seeds1"> a</div>
                <div className="classes.Seeds2"> a</div>
             </div> 
           );   
        case "meat":
          return <div className="classes.Meat"> a</div>
        case "cheese":
          return <div className="classes.Cheese">a </div> 
        case "salad":
          return <div className="classes.Salad"> a</div>
        case "bacon":
          return <div className="classes.Bacon"> a</div>
        default:
          return null;           
      }
    
    
    
    
}
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredients;