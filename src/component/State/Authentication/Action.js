import { api } from "../../Config/api"
import { ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_USER_REQUEST, 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE, 
    GET_USER_FAILURE, GET_USER_SUCCESS, ADD_TO_FAVOURITE_FAILURE, LOGIN_FAILURE } from "./ActionType"

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await api.post(`/auth/signup`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "RESTURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
        console.log("register success", data)
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        console.log(error)
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await api.post(`/auth/signin`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "RESTURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
        console.log("login success", data)
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
        console.log(error)
    }
}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get(`/users/profile`, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        } )
        dispatch({ type: GET_USER_SUCCESS, payload: data })
        console.log("user profile:",data)
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error })
        console.log(error)
    }
}

export const addToFavourites = (jwt, restaurantId) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVOURITE_REQUEST })
    try {
        const { data } = await api.put(`/restaurant/${restaurantId}/add-favourites`, {}, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        } )
        dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data })
        console.log("user profile:",data)
    } catch (error) {
        dispatch({ type: ADD_TO_FAVOURITE_FAILURE, payload: error })
        console.log(error)
    }

}
export const logout = (jwt) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVOURITE_REQUEST })
    try {
        localStorage.clear()
        dispatch({ type: LOGOUT})
        console.log("logout success")
    } catch (error) {
        console.log(error)
    }
}