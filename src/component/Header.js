import "../style/Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import actions from "../action";

export const Header = () => {
    const [isDisplaySearchBar, setIsDisplaySearchBar] = useState(false)

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('input', input)
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
                    <div className="Header_SearchBar_Input">
                        <SearchIcon className="Header_SearchBar_Input_Search" style={{color: '#ffffff'}}/>
                        <input type="text" onChange={event => {
                            setInput(event.target.value)
                        }}/>
                        <CloseIcon className="Header_SearchBar_Input_Close" style={{color: '#ffffffff'}}
                                   onClick={() => setIsDisplaySearchBar(false)}/>
                    </div>
                }
                {!isDisplaySearchBar &&
                    <SearchIcon style={{color: '#ffffff'}} onClick={() => setIsDisplaySearchBar(true)}/>}
            </div>
        </div>
    )
}