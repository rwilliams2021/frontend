import { api } from "../../Config/api"
import * as actionTypes from "./ActionType"

export const getRestaurantOrder = (restaurantId, orderStatus, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_ORDER_REQUEST })
    try {
        const { data } = await api.get(`admin/order/restaurant/${restaurantId}`, {
            params: { order_status: orderStatus },
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("get restaurant order:", data)
        dispatch({ type: actionTypes.GET_RESTAURANT_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_RESTAURANT_ORDER_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateOrderStatus = (orderId, orderStatus, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_REQUEST })
    try {
        const { data } = await api.put(`admin/order/restaurant/${orderId}/${orderStatus}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("update order status:", data)
        dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_FAILURE, payload: error })
        console.log(error)
    }
}