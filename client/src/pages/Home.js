import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Aside from '../components/Aside';

function Home() {
    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-7xl grid grid-cols-[1fr_2.5fr_1.5fr]">
                <Navbar/>
                <Feed/>
                <Aside/>
            </div>
        </div>
    )
}

export default Home;