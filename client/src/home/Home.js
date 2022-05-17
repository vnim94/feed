import { Navbar } from '../components';
import Feed from '../feed/Feed';
import Aside from '../aside/Aside';

function Home() {
    return (
        <div className="h-screen w-screen flex flex-row justify-center">
            <div className="min-w-[940px] flex flex-row">
                <Navbar/>
                <Feed/>
                <Aside/>
            </div>
        </div>
    )
}

export default Home;