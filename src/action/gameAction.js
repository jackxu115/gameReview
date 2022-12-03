import {actionType, gameURL, jackKey} from "../Helper";
import axios from "axios";

// fetch all games
const fetchNewGames = () => async dispatch => {

    dispatch({
        type: actionType.FETCH_LOADING,
        payload: true
    })
    try {
        let res = await axios({
            method: 'get',
            url: gameURL,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                key: jackKey,
                dates: '2022-01-01,2022-12-31'
            }
        })
        const {data: {results}} = res
        // console.log("get data", results)

        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })

        dispatch({
            type: actionType.FETCH_NEW_GAMES,
            payload: results
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })
        dispatch({
            type: actionType.FETCH_FAILURE,
            payload: e
        })
    }
}

// search games
const searchGames = (searchName) => async dispatch => {

    dispatch({
        type: actionType.FETCH_LOADING,
        payload: true
    })
    try {
        let res = await axios({
            method: 'get',
            url: gameURL,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                key: jackKey,
                search: searchName,
                page_size: 18
            }
        })
        const {data: {results}} = res
        // console.log("get data", res)

        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })

        dispatch({
            type: actionType.SEARCH_GAMES,
            payload: results
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })
        dispatch({
            type: actionType.FETCH_FAILURE,
            payload: e
        })
    }
}

const searchGameInput = gameInput => ({
    type: actionType.SEARCH_GAME_INPUT,
    payload: gameInput
})

// fetch game detail
const fetchGameDetail = gameId => async dispatch => {
    dispatch({
        type: actionType.FETCH_LOADING,
        payload: true
    })
    try {
        let res = await axios({
            method: 'get',
            url: `${gameURL}/${gameId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                key: jackKey,
            }
        })
        const {data} = res

        // console.log("get data", data)

        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })

        dispatch({
            type: actionType.FETCH_GAME_DETAIL,
            payload: data
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: actionType.FETCH_LOADING,
            payload: false
        })
        dispatch({
            type: actionType.FETCH_FAILURE,
            payload: e
        })
    }
}

export default {
    fetchNewGames,
    searchGames,
    searchGameInput,
    fetchGameDetail
}