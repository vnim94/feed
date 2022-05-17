import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Aside from '../components/Aside';

function Home() {
    return (
        <div className="h-screen w-screen flex flex-row justify-center">
            <div className="max-w-7xl w-full grid grid-cols-[1fr_3fr_2fr]">
                <Navbar/>
                <Feed/>
                <Aside/>
            </div>
        </div>
    )
}

export default Home;