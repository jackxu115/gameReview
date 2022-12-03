import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import actions from "../action";
import "../style/Banner.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ReactPlayer from 'react-player'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {GameDetail} from "./GameDetail";

export const Banner = () => {

    const dispatch = useDispatch()

    const [isPlay, setIsPlay] = useState(false)

    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        dispatch(actions.gameAction.fetchNewGames())
    }, [])

    let newGames = useSelector(state => state?.gameReducer?.newGames)

    return (
        <div className='Banner'>
            <div className="Banner_Image"
                 style={{background: newGames[0] && `url('${newGames[0].background_image}') no-repeat center center/cover`}}>
                <div className="Banner_Image_Name">{newGames[0] && newGames[0].name}</div>
                <div className="Banner_Image_Button">
                    <button className="Banner_Image_Button_Play"
                            onClick={() => {
                                setIsPlay(prevState => !prevState)
                                setIsMuted(true)
                            }}>
                        {isPlay ?
                            <>
                                <StopIcon style={{fontSize: 'xx-large'}}/>
                                <div>Stop</div>
                            </>
                            :
                            <>
                                <PlayArrowIcon style={{fontSize: 'xx-large'}}/>
                                <div>Play</div>
                            </>
                        }
                    </button>
                    <button className="Banner_Image_Button_Info">
                        <GameDetail gameDetail={newGames[0] && newGames[0]}/>
                    </button>
                    {
                        isPlay
                        &&
                        <button className="Banner_Image_Button_Volume"
                                onClick={() => {
                                    setIsMuted(prevState => !prevState)
                                }}>
                            {isMuted ? <VolumeOffIcon style={{fontSize: 'medium'}}/> :
                                <VolumeUpIcon style={{fontSize: 'medium'}}/>}
                        </button>
                    }
                </div>
            </div>
            <div className="Banner_Video">
                {isPlay &&
                    <ReactPlayer
                        playing={isPlay}
                        className="Banner_Video_YouTube"
                        // url='https://www.youtube.com/watch?v=E3Huy2cdih0&t=75s'
                        url='https://media.rawg.io/media/stories-640/136/136ffc1b31902219d8b68ece73be5348.mp4'
                        width="100%"
                        height="100%"
                        onEnded={() => setIsPlay(prevState => !prevState)}
                        muted={isMuted}
                    />
                }
            </div>
        </div>
    )

}