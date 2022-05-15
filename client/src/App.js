import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Splash from './splash/Splash';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Splash/>} />
            </Routes>
        </Router>
    )
}

export default App;
