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


// fetch all games
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
                search: searchName
            }
        })
        const {data: {results}} = res
        // console.log("get data", results)

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


export default {
    fetchNewGames,
    searchGames
}