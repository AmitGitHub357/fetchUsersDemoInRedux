import { BUY_ICE, ADD_ICE } from "./iceTypes";

const initialState = {
  numOfIce: 10,
}
const IceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };

    case ADD_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce + 1,
      };

    default:
      return state;
  }
}

export default IceReducer
