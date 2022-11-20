import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./component/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
