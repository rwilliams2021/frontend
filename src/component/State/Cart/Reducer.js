import { LOGOUT } from "../Authentication/ActionType"
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
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_ITEM_FROM_CART_REQUEST:
        case actionTypes.ADD_ITEM_TO_CART_REQUEST:
        case actionTypes.CLEAR_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                cartItems: action.payload.items
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
                    (cartItem) => cartItem.id === action.payload.id ? action.payload : cartItem
                )
            }
        case actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
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
        case LOGOUT:
            localStorage.removeItem("jwt")
            return {
                ...state,
                cartItems: [],
                cart: null,
                success: "Logout success"
            }
        default:
            return state
    }
}

export default cartReducer