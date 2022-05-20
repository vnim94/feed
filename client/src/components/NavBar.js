import { useNavigate } from 'react-router-dom';

function NavBar({ selected }) {
    return (
        <div className="w-64 h-screen">
            <div className="fixed top-0 w-64">
                <div className="pt-4 px-2 h-screen flex flex-col justify-between">
                    <div className="space-y-3">
                        <img className="p-1 h-14 w-14 rounded-full cursor-pointer border" src="/phunky-panda.png" alt="avatar"></img>
                        <div className="space-y-3 flex flex-col items-start">
                            <NavButton icon="home" text="Home" selected={selected === 'home'}/>
                            <NavButton icon="tag" text="Explore" selected={selected === 'explore'}/>
                            <NavButton icon="notifications" text="Notifications" selected={selected === 'notifications'}/>
                            <NavButton icon="message" text="Messages" selected={selected === 'message'}/>
                            <NavButton icon="bookmark_outline" text="Bookmarks" selected={selected === 'bookmarks'}/>
                            <NavButton icon="article" text="Lists" selected={selected === 'lists'}/>
                            <NavButton icon="person_outline" text="Profile" selected={selected === 'profile'}/>
                            <NavButton icon="more" text="More"/>
                        </div>
                        <button className="w-full py-3 bg-green-7 text-white-1 border font-bold text-xl border-grey-4 rounded-full flex items-center justify-center hover:bg-green-6">
                            <span>Feed</span>
                        </button>
                    </div>
                    <div className="rounded-full hover:bg-grey-3 cursor-pointer">
                        <div className="p-2 flex flex-row justify-between items-center">
                            <img className="h-10 w-10 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                            <div className="flex flex-col w-full px-2">
                                <span className="font-bold">Victor Nim</span>
                                <span className="text-grey-5">@victor_nim01</span>
                            </div>
                            <span className="material-icons-outlined">more_horiz</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavButton({ icon, selected, text }) {

    const navigate = useNavigate();

    return (
        <div className="p-3 flex flex-row items-center rounded-full hover:bg-grey-4 cursor-pointer duration-200" onClick={() => navigate(`/${text.toLowerCase()}`)}>
            <span className={`mr-5 scale-125 ${selected ? 'material-icons' : 'material-icons-outlined'}`}>{icon}</span>
            <span className={`${selected && 'font-bold'} text-xl`}>{text}</span>
        </div>
    )
}

export default NavBar;