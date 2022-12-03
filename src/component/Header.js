import "../style/Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import actions from "../action";
import ClickAwayListener from '@mui/base/ClickAwayListener';

export const Header = () => {
    const [isDisplaySearchBar, setIsDisplaySearchBar] = useState(false)

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        input !== "" && dispatch(actions.gameAction.searchGames(input))
        dispatch(actions.gameAction.searchGameInput(input))
    }, [input])

    return (
        <div className="Header">
            <div className="Header_MenuBar">
                <button>Home</button>
                <button>New & Popular</button>
                <button>Browse by Platform</button>
            </div>
            <div className="Header_SearchBar">
                {isDisplaySearchBar &&
                    <ClickAwayListener onClickAway={() => {
                        input === "" && setIsDisplaySearchBar(false)
                    }}>
                        <div
                            className="Header_SearchBar_Input"
                            onClose={() => setIsDisplaySearchBar(false)}
                        >
                            <SearchIcon className="Header_SearchBar_Input_Search" style={{color: '#ffffff'}}/>
                            <input
                                id="searchInput"
                                value={input}
                                type="text" onChange={event => {
                                setInput(event.target.value)
                            }}/>
                            {input !== "" &&
                                <CloseIcon
                                    id="searchClose"
                                    className="Header_SearchBar_Input_Close"
                                    style={{color: '#ffffffff'}}
                                    onClick={() => {
                                        setInput("")
                                    }}
                                />}
                        </div>
                    </ClickAwayListener>
                }
                {!isDisplaySearchBar &&
                    <SearchIcon id="searchIcon" style={{color: '#ffffff'}}
                                onClick={() => setIsDisplaySearchBar(true)}/>}
            </div>
        </div>
    )
}