import { Navbar } from '../components';

function Home() {
    return (
        <div className="h-screen w-screen flex flex-row justify-center">
            <div className="w-1/2 flex flex-row">
                <Navbar/>
                <Feed/>
                <Aside/>
            </div>
        </div>
    )
}

function Feed() {
    return (
        <div>

        </div>
    )
}

function Aside() {
    return (
        <div>

        </div>
    )
}

export default Home;