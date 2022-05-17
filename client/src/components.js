export function Navbar() {
    return (
        <div className="p-5 w-2/6 flex flex-col justify-between">
            <div>
                <img className="p-1 h-14 w-14 rounded-full cursor-pointer border" src="/phunky-panda.png" alt="avatar"></img>
                <div className="mb-5 space-y-3 flex flex-col items-start">
                    <NavButton icon="home" text="Home" selected={true}/>
                    <NavButton icon="tag" text="Explore"/>
                    <NavButton icon="notifications" text="Notifications"/>
                    <NavButton icon="message" text="Messages"/>
                    <NavButton icon="bookmark_outline" text="Bookmarks"/>
                    <NavButton icon="article" text="Lists"/>
                    <NavButton icon="person_outline" text="Profile"/>
                    <NavButton icon="more" text="More"/>
                </div>
                <button className="w-full py-3 bg-green-7 text-white-1 border font-bold text-xl border-grey-4 rounded-full flex items-center justify-center hover:bg-green-6">
                    <span>Feed</span>
                </button>
            </div>
            <div className="w-full">
                <div className="p-2 flex flex-row justify-between items-center rounded-full hover:bg-grey-3 cursor-pointer">
                    <img className="h-10 w-10 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                    <div className="flex flex-col w-full px-2">
                        <span className="font-bold">Victor Nim</span>
                        <span className="text-grey-5">@victor_nim01</span>
                    </div>
                    <div>
                        <span className="material-icons-outlined">more_horiz</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavButton({ icon, selected, text }) {
    return (
        <div className="p-3 flex flex-row items-center rounded-full hover:bg-grey-4 cursor-pointer duration-200">
            <span className="mr-5 scale-125 material-icons-outlined">{icon}</span>
            <span className={`${selected && 'font-bold'} text-xl`}>{text}</span>
        </div>
    )
}