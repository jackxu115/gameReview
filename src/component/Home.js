import {useSelector} from "react-redux";
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