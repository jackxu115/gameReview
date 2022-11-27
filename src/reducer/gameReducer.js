import {actionType} from "../Helper";

const initialState = {
    newGames: [],
    isLoading: null,
    errorMessage: null,
    searchGames: [],
    searchCount: null,
    searchInput: ""
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_LOADING:
            // console.log('Fetch loading')
            return {...state, isLoading: action?.payload}
        case actionType.FETCH_FAILURE:
            // console.log('Fetch Failure')
            return {...state, errorMessage: action?.payload}
        case actionType.FETCH_NEW_GAMES:
            // console.log('Fetch all games')
            return {...state, newGames: action?.payload}
        case actionType.SEARCH_GAMES:
            // console.log('Search games', action.payload)
            return {...state, searchGames: action?.payload}
        case actionType.SEARCH_GAMES_COUNT:
            // console.log('search games count')
            return {...state, searchCount: action?.payload}
        case actionType.SEARCH_GAME_INPUT:
            // console.log('search game input')
            return {...state, searchInput: action?.payload}
        default:
            return state
    }
}