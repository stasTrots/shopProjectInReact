import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { productLikeReducer } from './productLikeReducer'

export const rootReducer = combineReducers({
    productsLike:productLikeReducer,
    productsInCart:cartReducer
})
