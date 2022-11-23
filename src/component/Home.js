import {useDispatch} from "react-redux";
import {useEffect} from "react";
import actions from "../action";

export const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.gameAction.fetchAllGames())
    },[])

    return (
        <div className="Home">
        </div>
    )
}