import React from 'react'
import { buyCake } from '../redux/cakes/cakesAction'
import {connect} from 'react-redux'
function CakeContainer(props) {
  return (
    <div>
        <h1>CakeContainer - {props.numberofCakes}</h1>
    <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


const mapStateToProps = state =>{
    return {
        numberofCakes: state.cake.numberofCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(CakeContainer)