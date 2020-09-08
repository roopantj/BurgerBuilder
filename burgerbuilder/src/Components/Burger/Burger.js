import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  
   const transformedIng = Object.keys(props.ingredients).map((e)=>
    [...Array(props.ingredients[e])].map((_,i)=>
     <BurgerIngredients key={e+i} type={e}/>)
   );
   return(
      <div className={classes.Burger}>
         <BurgerIngredients type="bread-top"/>
         {transformedIng}
         <BurgerIngredients type="bread-bottom"/>

      </div>
      
    );
}

export default Burger;