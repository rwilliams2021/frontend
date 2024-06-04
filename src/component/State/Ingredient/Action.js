import api from "../../Config/api"
import * as actionTypes from "./ActionType"

export const createIngredient = (reqData, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_INGREDIENT_REQUEST })
    try {
        const { data } = await api.post(`/admin/ingredient`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("create ingredient:", data)
        dispatch({ type: actionTypes.CREATE_INGREDIENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.CREATE_INGREDIENT_FAILURE, payload: error })
        console.log(error)
    }
}

export const updateIngredientStock = (ingredientId, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_INGREDIENT_STOCK_REQUEST })
    try {
        const { data } = await api.put(`admin/ingredient/${ingredientId}/stock`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("update ingredient stock:", data)
        dispatch({ type: actionTypes.UPDATE_INGREDIENT_STOCK_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.UPDATE_INGREDIENT_STOCK_FAILURE, payload: error })
        console.log(error)
    }
}

export const getAllRestaurantIngredients = (restaurantId, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_REQUEST })
    try {
        const { data } = await api.get(`admin/ingredient/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("get all restaurant ingredients:", data)
        dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_FAILURE, payload: error })
        console.log(error)
    }
}   

export const createIngredientCategory = (reqData, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST })
    try {
        const { data } = await api.post(`admin/ingredient/category`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("create ingredient category:", data)
        dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error })
        console.log(error)
    }
}    

export const getAllRestaurantIngredientCategories = (restaurantId, jwt) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_REQUEST })
    try {
        const { data } = await api.get(`admin/ingredient/restaurant/${restaurantId}/category`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("get all restaurant ingredient categories:", data)
        dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_FAILURE, payload: error })
        console.log(error)
    }   
}