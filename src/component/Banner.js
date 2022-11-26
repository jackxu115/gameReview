import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import actions from "../action";
import "../style/Banner.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Header} from "./Header";
import ReactPlayer from 'react-player'

export const Banner = () => {

    const dispatch = useDispatch()

    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        dispatch(actions.gameAction.fetchNewGames())
    }, [])

    let newGames = useSelector(state => state?.gameReducer?.newGames)
    console.log(newGames[0])
    console.log(isPlay)

    return (
        <>
            <div className="Banner"
                 style={{background: newGames[0] && `url('${newGames[0].background_image}') no-repeat center center/cover`}}>
                <div className="Banner_Name">{newGames[0] && newGames[0].name}</div>
                <div className="Banner_Button">
                    <button className="Banner_Button_Play"><PlayArrowIcon style={{fontSize: 'xx-large'}}/>
                        <div onClick={() => setIsPlay(prevState => !prevState)}>Play</div>
                    </button>
                    <button className="Banner_Button_Info"><InfoOutlinedIcon style={{fontSize: 'x-large'}}/>
                        <div>More Info</div>
                    </button>
                </div>
            </div>
            <div>
                {isPlay && <ReactPlayer
                    playing={isPlay} className="Banner_YouTube"
                    url='https://media.rawg.io/media/stories-640/136/136ffc1b31902219d8b68ece73be5348.mp4'
                    style={{
                        position: "absolute",
                        zIndex: "-1"
                    }}
                />}
                <h3 style={{color: 'red'}}>Hello World</h3>
            </div>
        </>
    )

}