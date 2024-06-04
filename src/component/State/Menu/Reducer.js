import * as actionTypes from "./ActionType"

const initialState = {
    menuItems: [],
    isLoading: false,
    error: null,
    search: [],
    message: null
}
export const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.SEARCH_MENU_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                message: null
            }
        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                menuItems: [...state.menuItems, action.payload],
                message: "Food created successfully"
            }
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                menuItems: action.payload
            }
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                menuItems: state.menuItems.filter(item => item._id !== action.payload),
            }
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                menuItems: state.menuItems.map(
                    (menuItem) => menuItem._id === action.payload.id ? action.payload : menuItem
                )
            }
        case actionTypes.SEARCH_MENU_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                search: action.payload
            }
        case actionTypes.CREATE_MENU_ITEM_FAILURE:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
        case actionTypes.DELETE_MENU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
        case actionTypes.SEARCH_MENU_ITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                message: null
            }
        default:
            return state
    }
}

export default menuItemReducer