import{BUY_CAKE} from './cakeTypes'

const intitialState = {
    numberofCakes: 10
}

const cakeReducer = (state=intitialState, action) =>{

    switch (action.type){
        case BUY_CAKE: 
        return{
            ...state,
            numberofCakes:state.numberofCakes-action.payload
        }
        default: return state
    }
    
}

export default cakeReducer