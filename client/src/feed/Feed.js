import { useState } from 'react';

function Feed({ children }) {

    const [inputFocused, setInputFocused] = useState(false);

    return (
        <div className="w-3/4 flex flex-col border-l border-r border-l-grey-3 border-r-grey-3">
            <div className="px-5 pt-5 border-b border-b-grey-3">
                <div className="pb-3 sticky flex flex-row items-center justify-between">
                    <span className="font-bold text-xl">Home</span>
                    <span className="material-icons-outlined">auto_awesome</span>
                </div>
                <div className="flex flex-row flex-grow">
                    <div className="mr-1">
                        <img className="h-14 w-14 border border-grey-4 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                    </div>
                    <div className="flex flex-grow flex-col">
                        <div className="p-2 border-b border-b-grey-3">
                            <textarea className="pt-2 w-full text-xl appearance-none outline-none resize-none" placeholder="What's happening?" onFocus={() => setInputFocused(true)}></textarea>
                            {inputFocused && <div className="flex flex-row items-center">
                                <span className="mr-2 text-lg text-green-7 material-icons-outlined">public</span>
                                <span className="text-green-7 font-semibold text-sm">Everyone can reply</span>
                            </div>}
                        </div>
                        <div className="py-2 flex flex-row items-center justify-between">
                            <div className="">
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">image</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">gif_box</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">leaderboard</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">sentiment_satisfied</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">schedule</span>
                                <span className="p-2 material-icons-outlined rounded-full cursor-pointer hover:bg-green-2 duration-150">place</span>
                            </div>
                            <button className="px-5 py-1 bg-green-7 text-white-1 text-base font-semibold border-grey-4 rounded-full flex items-center justify-center hover:bg-green-6">Feed</button>
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