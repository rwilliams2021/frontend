import { API_URL } from "../../Config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_ALL_EVENTS_FAILURE, DELETE_ALL_EVENTS_REQUEST, DELETE_ALL_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_ALL_RESTAURANT_EVENTS_FAILURE, GET_ALL_RESTAURANT_EVENTS_REQUEST, GET_ALL_RESTAURANT_EVENTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORIES_FAILURE, GET_RESTAURANT_CATEGORIES_REQUEST, GET_RESTAURANT_CATEGORIES_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"

export const getAllRestaurants = () => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST })
    try {
        const { data } = await api.get(`${API_URL}/admin/restaurant`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data })
        console.log("all restaurants:", data)
    } catch (error) {
        dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error })
        console.log(error)
    }
}

export const getRestaurantById = (reqData) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`${API_URL}/admin/restaurant/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data })
        console.log("restaurant by id:", data)
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error })
        console.log(error)
    }
}

export const getRestaurantByUserID = (jwt) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST })
    try {
        const { data } = await api.get(`${API_URL}/admin/restaurant/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data })
        console.log("restaurant by id:", data)
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error })
        console.log(error)
    }
}

export const createRestaurant = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.post(`${API_URL}/admin/restaurant`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.token}`
            }
        })
        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
        console.log("create restaurant:", data)
    } catch (error) {
        dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.put(`${API_URL}/admin/restaurant/${restaurantId}`, restaurantData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data })
        console.log("update restaurant:", data)
    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error })
        console.log(error)
    }
}

export const deleteRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.delete(`${API_URL}/admin/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: data })
        console.log("delete restaurant:", data)
    } catch (error) {
        dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateRestaurantStatus = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST })
    try {
        const { data } = await api.put(`${API_URL}/admin/restaurant/${restaurantId}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data })
        console.log("update restaurant:", data)
    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error })
        console.log(error)
    }
}

export const createEvent = ({ data, jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: CREATE_EVENT_REQUEST })
    try {
        const { data } = await api.post(`${API_URL}/admin/event/restaurant/${restaurantId}`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_EVENT_SUCCESS, payload: data })
        console.log("create event:", data)
    } catch (error) {
        dispatch({ type: CREATE_EVENT_FAILURE, payload: error })
        console.log(error)
    }
}

export const getAllEvents = ({ jwt }) => async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST })
    try {
        const { data } = await api.get(`${API_URL}/admin/event/restaurant`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data })
        console.log("get all events:", data)
    } catch (error) {
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        console.log(error)
    }
}   

export const deleteAllEvents = ({ eventId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_ALL_EVENTS_REQUEST })
    try {
        const { data } = await api.delete(`${API_URL}/admin/event/${eventId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_ALL_EVENTS_SUCCESS, payload: data })
        console.log("delete event:", data)
    } catch (error) {
        dispatch({ type: DELETE_ALL_EVENTS_FAILURE, payload: error })
        console.log(error)
    }
}   

export const getRestaurantEvents = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_EVENTS_REQUEST })
    try {
        const { data } = await api.get(`${API_URL}/admin/event/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_ALL_RESTAURANT_EVENTS_SUCCESS, payload: data })
        console.log("get restaurant events:", data)
    } catch (error) {
        dispatch({ type: GET_ALL_RESTAURANT_EVENTS_FAILURE, payload: error })
        console.log(error)
    }
}       

export const createCategory = ({ reqData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST })
    try {
        const { data } = await api.post(`${API_URL}/admin/category`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data })
        console.log("create category:", data)
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        console.log(error)
    }
}

export const getRestaurantCategories = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_CATEGORIES_REQUEST})
    try {
        const { data } = await api.get(`${API_URL}/admin/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_RESTAURANT_CATEGORIES_SUCCESS, payload: data })
        console.log("get restaurant categories:", data)
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_CATEGORIES_FAILURE, payload: error })
        console.log(error)
    }
}