import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakesAction'
import {buyIcecrem} from '../redux/icecream/icecreamActions'
function itemContainer(props) {
  return (
    <div>
        <h2>Items -{props.item} </h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps =(state, ownProps)=>{
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCreame.numberofIceCremes

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecrem())

    return{
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (itemContainer)