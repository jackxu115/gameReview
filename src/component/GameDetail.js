import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../style/GameDetail.scss"
import {useEffect, useState} from "react";
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import actions from "../action";

export const GameDetail = ({gameDetail}) => {

    let game = useSelector(state => state?.gameReducer?.gameDetail)

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        gameDetail && dispatch(actions.gameAction.fetchGameDetail(gameDetail?.id))
    }
    const handleClose = () => setOpen(false);

    // console.log(gameDetail)

    console.log('game detail', game)

    return (
        <div className="GameDetail">
            <div className="GameDetail_Button" onClick={handleOpen}>
                <InfoOutlinedIcon style={{fontSize: 'x-large'}}/>
                <div>More Info</div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                style={{overflow: 'scroll'}}
            >
                <div className="GameDetail_Game">
                    {
                        game
                        &&
                        <>
                            <div className="GameDetail_Game_bgImage">
                                <img src={game?.background_image}/>
                            </div>
                            <div>
                                <div>
                                    <div>{game?.name}</div>
                                    <div>{game?.released}</div>
                                    <div>{game?.description_raw}</div>
                                    <div>Tags: {game?.tags.map((element, index) => <div
                                        key={index}>{element.name}</div>)}</div>
                                </div>
                                <div>
                                    <div>Platforms: {game?.platforms.map((element, index) => <div
                                        key={index}>{element.platform.name}</div>)}</div>
                                    <div>Genres: {game?.genres.map((element, index) => <div
                                        key={index}>{element.name}</div>)}</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Modal>
        </div>
    )
}