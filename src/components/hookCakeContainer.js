import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { buyCake, addCake } from "../redux/cake/cakeAction";
const HooksCakeContainer = () => { 
  const numOfCake = useSelector((state) => state.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>numOfCake {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Hooks Demo Buy Cake</button>
      <button onClick={() => dispatch(addCake())}>Hooks Demo Add Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
