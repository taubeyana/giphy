import axios from 'axios';

export const SET_GIFS = 'SET_GIFS';
export const FETCH_GIFS = 'FETCH_GIFS';
export const SET_SEARCH_VALUE = 'SET_SEARCH';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_PREV_PAGE = 'SET_PREV_PAGE';
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_FIRST_ITEM = 'SET_FIRST_ITEM';
export const SET_LAST_ITEM = 'SET_LAST_ITEM';
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const RESET_SEARCH = 'RESET_SEARCH';

export const fetchGifs = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus(true));
        const state = getState();
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=bzaWuHmUEaErMs8w1Af1Usur1qy7IwjL&q=${state.searchVal}&limit=${state.amountOfItems}&offset=${state.pageNumber * state.amountOfItems}&rating=G&lang=en`)
        .then(data => {
            let gifs = data.data.data;
            let totalItemsCount = data.data.pagination.total_count;
            dispatch(setGifs(gifs));
            dispatch(setTotalItems(totalItemsCount));
            dispatch(setFirstItem(state.pageNumber * gifs.length - (gifs.length - 1)));
            dispatch(setLastItem(state.pageNumber * gifs.length));
            dispatch(setLoadingStatus(false));
        })
        .catch(err => {
            console.log(err);
            dispatch(setPage(state.selectedPage));
            dispatch(fetchGifs());
        })
    }
}
export const setGifs = payload => ({
    type: SET_GIFS,
    payload: payload
})
export const resetSearch = payload => ({
    type: RESET_SEARCH,
    payload: payload
})
export const setFirstItem = payload => ({
    type: SET_FIRST_ITEM,
    payload: payload
})
export const setLastItem = payload => ({
    type: SET_LAST_ITEM,
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
    if (payload.toLowerCase() === 'next') {
        type = SET_NEXT_PAGE;
    }
    else {
        type = SET_PREV_PAGE
    }
    return ({
        type
    })
}
