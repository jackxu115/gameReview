import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import actions from "../action";
import {Banner} from "./Banner";
import {Header} from "./Header";
import {Search} from "./Search";

export const Home = () => {

    let isDisplay = useSelector(state => state?.gameReducer?.searchInput)

    return (
        <div className="Home">
            <Header/>
            {isDisplay === "" && <Banner/>}
            {isDisplay !== "" && <Search/>}
        </div>
    )
}