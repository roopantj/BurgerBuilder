import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  console.log("at burger.js") 
   return(
      <div className={classes.Burger}>
         <BurgerIngredients type="bread-top"/>
         <BurgerIngredients type="meat"/>
         <BurgerIngredients type="meat"/>
         <BurgerIngredients type="bread-bottom"/>
      </div>
      
    );
}

export default Burger;