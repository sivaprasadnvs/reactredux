import {combineReducer} from 'redux'

import IcecreamReducer from './icecream/icecreamReducer'
import cakeReducer from './cakes/cakeReducer'
import userReducer from './user/userReducer'
const rootReducer = combineReducer({

    cake: cakeReducer,
    icecreame: IcecreamReducer,
    user: userReducer

})

export default rootReducer