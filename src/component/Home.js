import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import actions from "../action";
import {Banner} from "./Banner";
import {Header} from "./Header";

export const Home = () => {

    return (
        <div className="Home">
            <Header/>
            <Banner/>
        </div>
    )
}