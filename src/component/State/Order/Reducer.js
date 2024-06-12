import * as actionTypes from "./ActionType"


const initialState = {
    orders: [],
    isLoading: false,
    error: null
}

export const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.CREATE_ORDER_REQUEST:
        case actionTypes.GET_USERS_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: [...state.orders, payload]
            }
        case actionTypes.GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: payload
            }
        case actionTypes.CREATE_ORDER_FAILURE:
        case actionTypes.GET_USERS_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}

export default orderReducer