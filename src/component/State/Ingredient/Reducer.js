import * as actionTypes from "./ActionType"


const initialState = {
    ingredients: [],
    categories: [],
    isLoading: false,
    error: null
}

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_INGREDIENT_REQUEST:
        case actionTypes.UPDATE_INGREDIENT_STOCK_REQUEST:
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_REQUEST:
        case actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST:
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case actionTypes.CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ingredients: [...state.ingredients, action.payload]
            }
        case actionTypes.UPDATE_INGREDIENT_STOCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ingredients: state.ingredients.map(ingredient => ingredient.id === action.payload.id ? action.payload : ingredient)
            }
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                ingredients: action.payload
            }
        case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: [...state.categories, action.payload]
            }
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case actionTypes.CREATE_INGREDIENT_FAILURE:
        case actionTypes.UPDATE_INGREDIENT_STOCK_FAILURE:
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENTS_FAILURE:
        case actionTypes.CREATE_INGREDIENT_CATEGORY_FAILURE:
        case actionTypes.GET_ALL_RESTAURANT_INGREDIENT_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}   

export default ingredientReducer