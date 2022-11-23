import {actionType, gameURL, jackKey} from "../Helper";
import axios from "axios";



// fetch all games
const fetchAllGames = () => async dispatch => {
    console.log('action')

    // dispatch({
    //     type: actionType.FETCH_LOADING,
    //     payload: true
    // })
    try {
        let res = await axios({
            method: 'get',
            url: gameURL,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                key: jackKey
            }
        })
        const {data} = res
        console.log("get data", data)

        // dispatch({
        //     type: actionType.FETCH_LOADING,
        //     payload: false
        // })


    } catch (e) {
        console.log(e)
        // dispatch({
        //     type: actionType.FETCH_LOADING,
        //     payload: false
        // })
        // dispatch({
        //     type: actionType.FETCH_FAILURE,
        //     payload: e
        // })
    }
}

export default {
    fetchAllGames
}