import "../style/Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

export const Header = () => {
    const [isDisplaySearchBar, setIsDisplaySearchBar] = useState(false)
    console.log(isDisplaySearchBar)

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
                        <input type="text"/>
                        <CloseIcon className="Header_SearchBar_Input_Close" style={{color: '#ffffffff'}} onClick={() => setIsDisplaySearchBar(false)}/>
                    </div>
                }
                {!isDisplaySearchBar &&
                    <SearchIcon style={{color: '#ffffff'}} onClick={() => setIsDisplaySearchBar(true)}/>}
            </div>
        </div>
    )
}