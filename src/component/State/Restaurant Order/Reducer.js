import * as actionTypes from "./ActionType"


const initialState = {
    orders: [],
    isLoading: false,
    error: null
}

const restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTAURANT_ORDER_REQUEST:
        case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.GET_RESTAURANT_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            }
        case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: state.orders.map(order => order.id === action.payload.id ? action.payload : order)
            }
        case actionTypes.GET_RESTAURANT_ORDER_FAILURE:
        case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default restaurantOrderReducer