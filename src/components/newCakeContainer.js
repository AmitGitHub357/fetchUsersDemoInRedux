import React, { useState } from "react";
import { connect } from "react-redux";
import { addCake, buyCake } from "../redux/cake/cakeAction";
const New_Cake_Container = (props) => {
    const [number,setNumber] = useState(1)
  return (
    <div>
      {/* <h2>number of cakes { props.numOfCakes }</h2> */}
      <input type="number" value={ number } onChange={ e => setNumber(e.target.value) }/><span><button onClick={ props.buyCake }>Buy Cake</button></span>
      <button onClick={() => props.buyCake(number)} >Buy { number } Cake</button>
        {/* <button onClick={ () => props.addCake(number)}Add {} */}
    </div>
  );
};

const mapStateToProps = (state) => 
{
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake : (number) => dispatch(buyCake(number)),
    addCake : () => dispatch(addCake()) 
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(New_Cake_Container); 
