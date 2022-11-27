import {useSelector} from "react-redux";
import "../style/Search.scss"

export const Search = () => {

    let searchGames = useSelector(state => state?.gameReducer?.searchGames)

    return (
        <div className="Search">
            {
                searchGames?.map((game, index) =>
                    <div key={index} className="Search_Game">
                        {/*<div>{game.slug}</div>*/}
                        <img src={game.background_image} alt=""/>
                    </div>
                )
            }
        </div>
    )
}