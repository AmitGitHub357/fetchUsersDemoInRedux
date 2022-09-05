import { BUY_ICE, ADD_ICE } from './iceTypes'

export const buyIce = () => {
    return {
        type : BUY_ICE
    }
}

export const addIce = () => {
    return {
        type : ADD_ICE
    }
}