import {omit} from 'lodash'


export const cartReducer = (state={
    
},action) => {
    switch(action.type) {
            case "ADDPRODUCT":
                return {
                    ...state,
                    [action.id]:(state[action.id] || 0) + +action.count
                }
            case "CHANGE_PRODUCT_QUANTITY":
                return {
                    ...state,
                    [action.id]:action.count
                }
            case "REMOVE_PRODUCT_FROM_CART":
                return omit(state,action.id)
            default:
                return state
    }
}
