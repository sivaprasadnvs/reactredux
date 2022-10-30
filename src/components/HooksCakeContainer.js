import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakesAction'
function HooksCakeContainer() {

    const numberOfCakes = useSelector(state =>state.cake.numberofCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes -{numberOfCakes}</h2>
        <button onClick={dispatch(buyCake)}>Buy Cakes </button>
    </div>
  )
}

export default HooksCakeContainer