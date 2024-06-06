import * as actionTypes from "./ActionType"
import { api } from "../../Config/api"

export const findCart = (jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.FIND_CART_REQUEST })
    try {
        const { data } = await api.get(`/cart`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("find cart:", data)
        dispatch({ type: actionTypes.FIND_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.FIND_CART_FAILURE, payload: error })
        console.log(error)
    }
}

export const clearCart = () => async (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_CART_REQUEST })
    try {
        const { data } = await api.put(`/cart/clear`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("clear cart:", data)
        dispatch({ type: actionTypes.CLEAR_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.CLEAR_CART_FAILURE, payload: error })
        console.log(error)
    }
}

//Unimplemented in backend
export const getAllCartItems = (reqData) => async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST })
    try {
        const response = await api.get(`/cart/${reqData.cartId}/items`, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        })
        console.log("get all cart items:", data)
        dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error })
        console.log(error)
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.put(`/cart/add`, reqData.cartItem, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        })
        console.log("add item to cart:", data)
        dispatch({ type: actionTypes.ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.ADD_ITEM_TO_CART_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_CART_ITEM_REQUEST })
    try {
        const { data } = await api.put(`/cart/cart-item/update`, reqData, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("update cart item:", data)
        dispatch({ type: actionTypes.UPDATE_CART_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.UPDATE_CART_ITEM_FAILURE, payload: error })
        console.log(error)
    }
}

export const removeCartItem = (cartItemId, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART_REQUEST })
    try {
        const { data } = await api.delete(`/cart/cart-item/${cartItemId}/remove`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("remove cart item:", data)
        dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART_FAILURE, payload: error })
        console.log(error)
    }
}