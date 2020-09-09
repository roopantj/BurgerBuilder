import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends React.Component{
  state = { 
    ingredients : {
    cheese : 2,
    bacon : 1,
    salad : 1,
    meat : 1 
  }
  }
  render(){
     
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;