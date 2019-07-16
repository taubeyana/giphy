import {
    SET_GIFS,
    SET_LOADING_STATUS,
    SET_SEARCH_VALUE,
    SET_NEXT_PAGE,
    SET_PREV_PAGE,
    SET_TOTAL_ITEMS,
} from './actions';

const initialState = {
    gifs: [],
    isLoading: true,
    searchVal: '',
    pageNumber: 1,
    amountOfItems: 10,
    totalItems: 0
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
            return {...state, pageNumber: state.pageNumber + 1 };
        case SET_PREV_PAGE: 
            return {...state, pageNumber: state.pageNumber - 1 };
        default:
            return state;
    }
}

export default rootReducer;