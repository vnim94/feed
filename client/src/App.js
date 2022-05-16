import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Splash from './splash/Splash';
import { Login, Signup } from './user/Form';
import Home from './home/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<><Splash/><Outlet/></>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<Signup/>} />
                </Route>
                <Route path="home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App;
