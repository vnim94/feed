import { useState } from 'react';

function Feed({ children }) {
    return (
        <div className="border border-x-grey-3 ">
            {children}
        </div>
    )
}

export function HomeBanner() {
    return (
        <div className="px-4 py-3 sticky top-0 flex flex-row items-center justify-between bg-white-1 bg-opacity-70">
            <span className="font-bold text-xl">Home</span>
            <span className="material-icons-outlined">auto_awesome</span>
        </div>
    )
}

export function FeedBox() {
    const [inputFocused, setInputFocused] = useState(false);

    return (
        <div className="px-4 flex flex-row flex-grow border-b border-b-grey-3">
        <div className="mr-1">
            <img className="h-14 w-14 border border-grey-4 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
        </div>
        <div className="flex flex-grow flex-col">
            <div className="p-2">
                <textarea className="pt-2 w-full text-xl appearance-none outline-none resize-none" placeholder="What's happening?" onFocus={() => setInputFocused(true)}></textarea>
                {inputFocused && <div className="flex flex-row items-center border-b border-b-grey-3">
                    <span className="mr-2 text-lg text-green-7 material-icons-outlined">public</span>
                    <span className="text-green-7 font-semibold text-sm">Everyone can reply</span>
                </div>}
            </div>
            <div className="py-2 flex flex-row items-center justify-between">
                <div>
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
    )
}

export function Card({ link }) {
    return (
        <div className="px-4 py-2 w-full border-b border-b-grey-3 grid grid-cols-[1fr_8fr]">
            <div className="mt-2 mr-3">
                <img className="h-14 w-14 border border-grey-4 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-1">
                        <div className="flex flex-row items-center space-x-1">
                            <a className="font-semibold hover:underline" href={link}>Forbes</a>
                            <span className="text-lg text-green-7 material-icons">verified</span>
                        </div>
                        <span className="text-grey-5">@Forbes</span>
                        <span className="text-grey-5">&#183;</span>
                        <span className="text-grey-5">3m</span>
                    </div>
                    <span className="py-1 px-2 text-xl material-icons-outlined rounded-full hover:bg-green-1 cursor-pointer">more_horiz</span>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis viverra dui. 
                        Aliquam in lacinia neque, id fringilla nulla. Fusce eget pharetra libero, nec posuere dolor. Mauris sagittis luctus faucibus. 
                        Ut quis condimentum turpis. Sed pellentesque quam nisi, in mattis sem pellentesque ac. Proin non faucibus erat. Fusce a luctus est.
                    </p>
                </div>
                <div className="my-2">
                    <img className="max-h-96 rounded-xl" src="https://cdn.creatureandcoagency.com/uploads/2014/04/Panda-Facts-Featured.jpg" alt="card"></img>
                </div>
                <div className="grid grid-cols-4">
                    <CardButton icon="mode_comment" count={146}/>
                    <CardButton icon="shortcut" count={146}/>
                    <CardButton icon="favorite_border" count={146}/>
                    <CardButton icon="ios_share"/>
                </div>
            </div>
        </div>
    )
}

function CardButton({ icon, count }) {
    return (
        <div className="flex flex-row items-center">
            <span className="py-1 px-2 text-xl material-icons-outlined rounded-full hover:bg-green-1 cursor-pointer">{icon}</span>
            <span className="text-sm text-grey-5">{count}</span>
        </div>
    )
}

export default Feed;