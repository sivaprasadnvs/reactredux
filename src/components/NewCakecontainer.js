import React , {useSatate} from 'react'


import { buyCake } from '../redux/cakes/cakesAction'
import {connect} from 'react-redux'
function NewCakeContainer(props) {
const [number, setNumber] = useSatate(1)

  return (
    <div>
        <h1>CakeContainer - {props.numberofCakes}</h1>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
    <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake:number=>dispatch(buyCake(number))
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(NewCakeContainer)