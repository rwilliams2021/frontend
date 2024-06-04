import * as actionTypes from "./ActionType"

const initialState = {
    cartItems: [],
    cart: null,
    isLoading: false,
    error: null
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.ADD_ITEM_TO_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_ITEM_FROM_CART_REQUEST:
        case actionTypes.CLEAR_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.FIND_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: action.payload
            }
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: [...state.cartItems, action.payload]
            }
        case actionTypes.GET_ALL_CART_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: action.payload
            }
        case actionTypes.UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: state.cartItems.map(
                    (cartItem) => cartItem._id === action.payload.id ? action.payload : cartItem
                )
            }
        case actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: state.cartItems.filter(item => item._id !== action.payload)
            }
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: []
            }
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.ADD_ITEM_TO_CART_FAILURE:
        case actionTypes.GET_ALL_CART_ITEMS_FAILURE:
        case actionTypes.UPDATE_CART_ITEM_FAILURE:
        case actionTypes.REMOVE_ITEM_FROM_CART_FAILURE:
        case actionTypes.CLEAR_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default cartReducer