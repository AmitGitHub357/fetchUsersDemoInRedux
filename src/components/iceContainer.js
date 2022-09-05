import React from "react";
import { buyIce , addIce } from "../redux/iceCream/iceAction";
import { connect } from "react-redux";

const IceContainer = (props) => {  
  return(<div>
        <h2>Num Of IceCream { props.numOfIce }</h2>
        <button onClick={ props.addIce }>Add</button>
        <button onClick={ props.buyIce }>Buy</button>
    </div>)
}

const mapStateToProps = (state) => {
    return { 
        numOfIce : state.iceCream.numOfIce
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addIce : () => dispatch(addIce()),
        buyIce : () => dispatch(buyIce())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceContainer)

