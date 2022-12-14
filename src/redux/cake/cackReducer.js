import { BUY_CAKE ,ADD_CAKE } from './cakeTypes'

const initalState = {
    numOfCakes : 10
}

const CakeReducer = (state = initalState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - action.payload                              
        } 

        case ADD_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes + 1
        }

        default : return state
    }
}

export default CakeReducer