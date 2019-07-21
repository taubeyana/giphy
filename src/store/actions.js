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

/**
 * Fetching gifs from giphy api, use axios and thunk middlewere to use async actions. If data fetching was successful - sets the gifs array, 
 if there was an error trying to fetch the gifs of next or prev page, also set the first and the last item of current page.
 */
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
            if (gifs.length > 0) {
                dispatch(setFirstItem(state.pageNumber * gifs.length - (gifs.length - 1)));
                dispatch(setLastItem(state.pageNumber * gifs.length));
            }
            dispatch(setLoadingStatus(false));
        })
        .catch(err => {
            console.log(err);
            dispatch(setPage(state.selectedPage));
            dispatch(fetchGifs());
        })
    }
}
/**
 * 
 * @param {array} payload sets the array of gifs that returned from api - changing the gifs key
 */
export const setGifs = payload => ({
    type: SET_GIFS,
    payload: payload
})

/**
 * Resetting the firstItem, lastItem and pageNumber keys to initial state
 */
export const resetSearch = () => ({
    type: RESET_SEARCH,
})

/**
 * 
 * @param {int} payload setting the firstItem on current page
 */
export const setFirstItem = payload => ({
    type: SET_FIRST_ITEM,
    payload: payload
})
/**
 * 
 * @param {{int} payload setting the firstItem on current page} 
 */
export const setLastItem = payload => ({
    type: SET_LAST_ITEM,
    payload: payload
})
/**
 * 
 * @param {string} payload getting input from search field - passes to reducer the search value - changing the searchVal key 
 */
export const setSearchValue = payload => ({
    type: SET_SEARCH_VALUE,
    payload: payload
})
/**
 * 
 * @param {boolean} payload set the flag of loading status - before or after fetching gifs - change the isLoading key
 */
export const setLoadingStatus = (payload) => ({
    type: SET_LOADING_STATUS,
    payload: payload
})

/**
 * 
 * @param {int} payload sets the total count of gifs - data returned from api
 */
export const setTotalItems = (payload) => ({
    type: SET_TOTAL_ITEMS,
    payload: payload
})
/**
 * 
 * @param { string } payload gettinig parameter of page (next or prev) and change the value of key pageNumber - passing to reducer the type of page - increments if next and decrements if prev
 * 
 */
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
