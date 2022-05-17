import { useState } from 'react';

function Feed({ children }) {

    const [inputFocused, setInputFocused] = useState(false);

    return (
        <div className="w-3/4 flex flex-col border-l border-r border-l-grey-3 border-r-grey-3">
            <div className="p-5 border-b border-b-grey-3">
                <div className="sticky flex flex-row items-center justify-between">
                    <span className="font-bold text-xl">Home</span>
                    <span className="material-icons-outlined">auto_awesome</span>
                </div>
                <div className="pb-5 h-full flex flex-row">
                    <div className="pt-2 pr-2">
                        <img className="h-14 w-14 border border-grey-4 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                    </div>
                    <div className="pt-2 flex flex-grow flex-col justify-between">
                        <div className="px-2">
                            <input className="py-3 text-xl appearance-none outline-none" placeholder="What's happening?" onFocus={() => setInputFocused(true)}></input>
                            {inputFocused && <div className="py-2 border-b border-b-grey-3 flex flex-row items-center">
                                <span className="mr-2 text-lg text-green-7 material-icons-outlined">public</span>
                                <span className="text-green-7 font-semibold text-sm">Everyone can reply</span>
                            </div>}
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="">
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">image</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">gif_box</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">leaderboard</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">sentiment_satisfied</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">schedule</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">place</span>
                            </div>
                            <button className="px-4 py-1 bg-green-7 text-white-1 text-lg border-grey-4 rounded-full flex items-center justify-center hover:bg-green-6">Feed</button>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

function Card() {
    return (
        <div>

        </div>
    )
}

export default Feed;