import React from 'react'
import { buyIcecrem } from '../redux/cakes/cakesAction'
import {connect} from 'react-redux'
function icecremContainer(props) {
  return (
    <div>
        <h1>CakeContainer - {props.numberofCakes}</h1>
    <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


const mapStateToProps = state =>{
    return {
        numberofIcecreams: state.icecreme.numberofIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecrem:()=>dispatch(buyIcecrem())
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(icecremContainer)