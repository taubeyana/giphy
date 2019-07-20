import {
    SET_GIFS,
    SET_LOADING_STATUS,
    SET_SEARCH_VALUE,
    SET_NEXT_PAGE,
    SET_PREV_PAGE,
    SET_TOTAL_ITEMS,
    SET_FIRST_ITEM,
    SET_LAST_ITEM,
    RESET_SEARCH
} from './actions';

const initialState = {
    gifs: [],
    isLoading: false,
    searchVal: '',
    pageNumber: 0,
    selectedPage: '',
    amountOfItems: 10,
    totalItems: 0,
    firstItemNumber: 0,
    lastItemNumber: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GIFS: 
            return {...state, gifs: action.payload};
        case SET_LOADING_STATUS: 
            return {...state, isLoading: action.payload};
        case SET_SEARCH_VALUE: 
            return {...state, searchVal: action.payload};
        case SET_TOTAL_ITEMS: 
            return {...state, totalItems: action.payload};
        case SET_NEXT_PAGE: 
            return {...state, pageNumber: state.pageNumber + 1, selectedPage: 'next' };
        case SET_PREV_PAGE: 
            return {...state, pageNumber: state.pageNumber - 1, selectedPage: 'previous' };
        case SET_FIRST_ITEM: 
            return {...state, firstItemNumber: action.payload};
        case SET_LAST_ITEM: 
            return {...state, lastItemNumber: action.payload};
        case RESET_SEARCH: 
            return {...state, firstItemNumber: 0, lastItemNumber: 0, pageNumber: 1};
        default:
            return state;
    }
}

export default rootReducer;