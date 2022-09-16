import { ActionTypes } from "../contants/actionTypes"

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,

    }
}

export const selectedProduct = (products) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
        
    }
}