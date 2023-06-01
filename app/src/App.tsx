import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Navigator from "./components/Navigator";

function App() {

    useEffect(() => {
        document.body.classList.add("bg-green-900")
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigator/>}>
                    <Route index element={<Menu/>}/>
                    <Route path="posts" element={<Posts/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
