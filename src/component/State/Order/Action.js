import { api } from "../../Config/api"
import * as actionTypes from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ORDER_REQUEST })
    try {
        const { data } = await api.post(`/order`, reqData.order, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        // if(data.payment_url){
        //     window.location.href = data.payment_url
        // }
        console.log("create order:", data)
        dispatch({ type: actionTypes.CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.CREATE_ORDER_FAILURE, payload: error })
        console.log(error)
    }
}

export const getUsersOrders = (jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_USERS_ORDERS_REQUEST })
    try {
        const { data } = await api.get(`/order`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("get users orders:", data)
        dispatch({ type: actionTypes.GET_USERS_ORDERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_USERS_ORDERS_FAILURE, payload: error })
        console.log(error)
    }
}