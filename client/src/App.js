import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<h1 className="text-5xl font-bold underline">feed</h1>} />
            </Routes>
        </Router>
    )
}

export default App;
