import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Splash from './splash/Splash';
import { Login, Signup } from './user/Form';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';

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
                <Route path="notifications" element={<Notifications/>}>
                        <Route path=":tab" element={<Notifications/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
