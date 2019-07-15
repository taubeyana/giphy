import {
    GET_GIFS,
    SET_LOADING_STATUS,
    SET_SEARCH_VALUE,
    SET_NEXT_PAGE,
    SET_PREV_PAGE,
    SET_TOTAL_ITEMS,
    SET_STORED_GIFS
} from './actions'
const initialState = {
    gifs: [],
    isLoading: true,
    searchVal: '',
    pageNumber: 1,
    amountOfItems: 10,
    totalItems: 0,
    storedGifs: {1: []}
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GIFS: 
            // console.log(action.payload);
            return {...state, gifs: action.payload};
        case SET_STORED_GIFS: 
            const newState = {...state}
            return newState['storedGifs'][state.pageNumber] = action.payload
        case SET_LOADING_STATUS: 
            // console.log(action.payload);
            return {...state, isLoading: action.payload};
        case SET_SEARCH_VALUE: 
            // console.log(action.payload);
            return {...state, searchVal: action.payload};
        case SET_TOTAL_ITEMS: 
            // console.log(action.payload);
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