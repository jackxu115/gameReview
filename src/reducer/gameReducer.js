import {actionType} from "../Helper";

const initialState = {
    newGames: [],
    isLoading: null,
    errorMessage: null,
}


export const gameReducer = (state = initialState, action ) => {
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
        default:
            return state
    }
}