import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Splash from './splash/Splash';
import { Login, Signup } from './user/Form';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Splash/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
            </Routes>
        </Router>
    )
}

export default App;
