import axios from 'axios';

export const GET_GIFS = 'GET_GIFS';
export const FETCH_GIFS = 'FETCH_GIFS';
export const SET_SEARCH_VALUE = 'SET_SEARCH';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_PREV_PAGE = 'SET_PREV_PAGE';
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_STORED_GIFS = 'SET_STORED_GIFS';


export const fetchGifs = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus(true));
        const state = getState();
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=bzaWuHmUEaErMs8w1Af1Usur1qy7IwjL&q=${state.searchVal}&limit=${state.amountOfItems}&offset=${state.pageNumber * state.amountOfItems}&rating=G&lang=en`)
        .then(data => {
            console.log(data)
            // dispatch(setStoredGifs(data.data.data));
            dispatch(getGifs(data.data.data));
            dispatch(setTotalItems(data.data.pagination.total_count));
            dispatch(setLoadingStatus(false));
        })
        .catch(err => console.log(err))
    }
}
export const getGifs = payload => ({
    type: GET_GIFS,
    payload: payload
})

export const setStoredGifs = payload => ({
    type: SET_STORED_GIFS,
    payload: payload
})

export const setSearchValue = payload => ({
    type: SET_SEARCH_VALUE,
    payload: payload
})
export const setLoadingStatus = (payload) => ({
    type: SET_LOADING_STATUS,
    payload: payload
})
export const setTotalItems = (payload) => ({
    type: SET_TOTAL_ITEMS,
    payload: payload
})
export const setPage = (payload) => {
    let type;
    if (payload === 'Next') {
        type = SET_NEXT_PAGE;
    }
    else {
        type = SET_PREV_PAGE
    }
    return ({
        type
    })
}
