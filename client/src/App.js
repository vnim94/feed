import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Splash from './splash/Splash';
import { Login, Signup } from './user/Form';
import Home from './pages/Home';
import Explore from './pages/Explore';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<><Splash/><Outlet/></>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<Signup/>} />
                </Route>
                <Route path="home" element={<Home/>}/>
                <Route path="explore" element={<Explore/>}>
                    <Route path="tabs/:tab" element={<Explore/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
