import{BUY_ICECREAM} from './icecreamTypes'

const intitialState = {
    numberofIcecreams: 10
}

const IcecreamReducer = (state=intitialState, action) =>{

    switch (action.type){
        case BUY_ICECREAM: 
        return{
            ...state,
            numberofIcecreams:state.numberofIcecreams-1
        }
        default: return state
    }
    
}

export default IcecreamReducer