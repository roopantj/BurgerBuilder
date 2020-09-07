import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends React.Component{
  render(){
    console.log("at burgerbuilder.js") 
    return(
      <Aux>
        <Burger/>
        <div>Builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;