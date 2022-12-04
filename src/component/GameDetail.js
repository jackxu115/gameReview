import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../style/GameDetail.scss"
import {useEffect, useState} from "react";
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import actions from "../action";
import CloseIcon from '@mui/icons-material/Close';

export const GameDetail = ({gameDetail}) => {

    let game = useSelector(state => state?.gameReducer?.gameDetail)

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        gameDetail && dispatch(actions.gameAction.fetchGameDetail(gameDetail?.id))
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

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
                                <CloseIcon className="GameDetail_Game_bgImage_Close" style={{fontSize: 'xx-large'}} onClick={handleClose}/>
                            </div>
                            <div className="GameDetail_Game_Info">
                                <div className="GameDetail_Game_Info_GameName">{game?.name}</div>
                                <div className="GameDetail_Game_Info_About">
                                    <div className="GameDetail_Game_Info_About_Heading">About</div>
                                    <div>{game?.description_raw}</div>
                                </div>
                                <div className="GameDetail_Game_Info_Section">
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Release Date</div>
                                        <div>{game?.released}</div>
                                    </div>
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Metascore</div>
                                        <div
                                            className="GameDetail_Game_Info_Section_Card_Metascore">{game?.metacritic}</div>
                                    </div>
                                </div>
                                <div className="GameDetail_Game_Info_Section">
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Platforms</div>
                                        <div className="GameDetail_Game_Info_Section_Card_List">
                                            {game?.platforms.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.platform.name}</div>
                                                }
                                                return <div key={index}>{element.platform.name},</div>
                                            })}
                                        </div>
                                    </div>
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Genres</div>
                                        <div className="GameDetail_Game_Info_Section_Card_List">
                                            {game?.genres.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.name}</div>
                                                }
                                                return <div key={index}>{element.name},</div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="GameDetail_Game_Info_Section">
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Publishers</div>
                                        <div className="GameDetail_Game_Info_Section_Card_List">
                                            {game?.publishers.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.name}</div>
                                                }
                                                return <div key={index}>{element.name},</div>
                                            })}
                                        </div>
                                    </div>
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Developers</div>
                                        <div className="GameDetail_Game_Info_Section_Card_List">
                                            {game?.developers.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.name}</div>
                                                }
                                                return <div key={index}>{element.name},</div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="GameDetail_Game_Info_Section">
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Age rating</div>
                                        <div>{game?.esrb_rating.name}</div>
                                    </div>
                                    <div className="GameDetail_Game_Info_Section_Card">
                                        <div className="GameDetail_Game_Info_Section_Card_Heading">Stores</div>
                                        <div className="GameDetail_Game_Info_Section_Card_List">
                                            {game?.stores.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.store.name}</div>
                                                }
                                                return <div key={index}>{element.store.name},</div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="GameDetail_Game_Info_Section">
                                    <div className="GameDetail_Game_Info_Section_Tag">
                                        <div className="GameDetail_Game_Info_Section_Tag_Heading">Tags</div>
                                        <div className="GameDetail_Game_Info_Section_Tag_List">
                                            {game?.tags.map((element, index, array) => {
                                                if (array.length - 1 === index) {
                                                    return <div key={index}>{element.name}</div>
                                                }
                                                return <div key={index}>{element.name},</div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Modal>
        </div>
    )
}