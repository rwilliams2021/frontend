import { api } from "../../Config/api"
import { CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, CREATE_MENU_ITEM_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS 
, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    SEARCH_MENU_ITEMS_REQUEST, SEARCH_MENU_ITEMS_SUCCESS, SEARCH_MENU_ITEMS_FAILURE } from "./ActionType"
export const createMenuItem = ({ menu, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST })
    try {
        const { data } = await api.post(`/admin/food/create/`, menu, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("create menu item:", data)
        dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateMenuItemsAvailability = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST })
    try {
        const { data } = await api.put(`/admin/food/${foodId}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("update menu items availability:", data)
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error })
        console.log(error)
    }
}

export const deleteMenuItem = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST })
    try {
        const { data } = await api.delete(`/admin/food/${foodId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("delete menu item:", data)
        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error })
        console.log(error)
    }
}

export const getMenuItemsByRestaurantId = (reqData) => async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.get(`/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
        &nonVegetarian=${reqData.nonveg}&seasonal=${reqData.seasonal}&category=${reqData.foodCategory}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("get menu items by restaurant id:", data)
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error })
        console.log(error)
    }
}

export const searchMenutItems = ({ keyword, jwt }) => async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEMS_REQUEST })
    try {
        const { data } = await api.get(`/food/search?name=${keyword}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("search menu items:", data)
        dispatch({ type: SEARCH_MENU_ITEMS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SEARCH_MENU_ITEMS_FAILURE, payload: error })
        console.log(error)
    }
}
