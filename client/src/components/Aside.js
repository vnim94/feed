import { useState } from 'react';

function Aside() {

    const [more, setMore] = useState(false);

    return (
        <div className="p-3 flex flex-col space-y-4">
            <SearchBar/>
            <div className="bg-grey-2 rounded-xl">
                <div className="p-3">
                    <span className="font-bold text-xl">What's happening</span>
                </div>
                <WhatItem heading="Heading" text="text" topic="Topic" icon={true} live={true}/>
                <WhatItem heading="Heading" text="text" topic="Topic" img="/phunky-panda.png"/>
            </div>
            <div className="bg-grey-2 rounded-xl">
                <div className="p-3">
                    <span className="font-bold text-xl">Who to follow</span>
                </div>
                <WhoItem name="Name" tag="@Name"/>
            </div>
            <div className="flex flex-row flex-wrap items-center text-sm text-grey-5">
                <a className="mr-2 hover:underline" href="/">Terms of Service</a>
                <a className="mr-2 hover:underline" href="/">Privacy Policy</a>
                <a className="mr-2 hover:underline" href="/">Cookie Policy</a>
                <a className="mr-2 hover:underline" href="/">Accessibility</a>
                <a className="mr-2 hover:underline" href="/">Ads info</a>
                <div className="relative mr-2 flex flex-row items-center">
                    {more && <div className="absolute bottom-0 w-48 flex flex-col bg-white-1 shadow-lg rounded-xl">
                        <div className="p-3 cursor-pointer">
                            <a className="text-base" href="/">About</a>
                        </div>
                        <div className="p-3 cursor-pointer">
                            <a className="text-base" href="/">Status</a>
                        </div>
                        <div className="p-3 cursor-pointer">
                            <a className="text-base" href="/">Feed for Business</a>
                        </div>
                        <div className="p-3 cursor-pointer">
                            <a className="text-base" href="/">Developers</a>
                        </div>
                    </div>}
                    <span className="mr-0.5 hover:underline cursor-pointer" onClick={() => setMore(true)}>More</span>
                    <span className="text-sm material-icons-outlined">more_horiz</span>
                </div>
                <span>© 2022 Feed, Inc.</span>
            </div>
        </div>
    )
}

function SearchBar() {

    const [search, setSearch] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <div className="relative">
            <div className={`${searchFocused ? 'bg-white-1 border-green-7' : 'bg-grey-2 border-transparent'} px-3 py-2 w-full flex flex-row items-center justify-between rounded-full border`}>
                <span className="material-icons-outlined">search</span>
                <input className="px-3 appearance-none outline-none bg-transparent flex-grow" placeholder="Search Feed" value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}></input>
                <span className={`${(!searchFocused || search.length === 0) && 'invisible'} bg-green-2 px-1 rounded-full text-lg material-icons-outlined cursor-pointer`} onClick={() => setSearch('')}>close</span>
            </div>
            {searchFocused && search.length > 0 && <SearchResults/>}
            {searchFocused && search.length === 0 && <RecentResults/>}
        </div>
    )
}

function SearchResults() {
    return (
        <div className="absolute w-full flex flex-col bg-white-1 shadow-lg rounded-xl overflow-y-scroll">
            <SearchResult name="Forbes" tag="@Forbes" description="Official account of Forbes, the world's leading voice for entrepreneurial success and free enterprise, and home to breaking news, business, money and more."/>
            <SearchResult name="Forbes" tag="@Forbes" description="Official account of Forbes, the world's leading voice for entrepreneurial success and free enterprise, and home to breaking news, business, money and more."/>
        </div>
    )
}

function SearchResult({ name, tag, description }) {
    return (
        <div className="grid grid-cols-[1fr_3fr] gap-x-1 p-3 hover:bg-grey-1 cursor-pointer">
            <div>
                <img className="h-14 w-14 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-sm">{name}</span>
                <span className="text-sm text-grey-5">{tag}</span>
                <span className="text-sm text-grey-5">{description.length > 23 ? `${description.slice(0,23)}...`: description}</span>
            </div>
        </div>
    )
}

function RecentResults() {
    return (
        <div className="absolute w-full flex flex-col bg-white-1 shadow-lg rounded-xl overflow-y-scroll">
            <div className="p-3 flex flex-row justify-between items-center">
                <span className="font-bold text-xl">Recent</span>
                <div className="px-3 rounded-full hover:bg-green-1 cursor-pointer">
                    <span className="font-bold text-sm text-green-7">Clear all</span>
                </div>
            </div>
            <RecentResult name="Forbes" tag="@Forbes"/>
        </div>
    )
}

function RecentResult({ name, tag }) {
    return (
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-x-1 items-center p-3 hover:bg-grey-1 cursor-pointer">
            <div>
                <img className="h-14 w-14 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">{name}</span>
                <span className="text-grey-5">{tag}</span>
            </div>
            <div className="flex flex-row justify-end">
                <span className="text-green-7 px-2 py-0.5 rounded-full text-lg material-icons-outlined cursor-pointer hover:bg-green-1 ">close</span>
            </div>
        </div>
    )
}

function WhatItem({ heading, text, topic, icon, img, live }) {
    return (
        <div className="p-3 flex flex-row hover:bg-grey-1 cursor-pointer">
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row space-x-1">
                    <span className="text-sm text-grey-5">{topic}</span>
                    {live && <>
                        <span className="text-sm text-grey-5">&#183;</span>
                        <span className="text-sm text-grey-5">LIVE</span>
                    </>}
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="font-bold">{heading}</span>
                </div>
                <div>
                    <span className="text-grey-5">{text}</span>
                </div>
            </div>
            {img && <img alt="small"></img>}
            {icon && <span className="px-1 text-grey-5 material-icons-outlined hover:bg-green-1 rounded-full">more_horiz</span>}
        </div>
    )
}

function WhoItem({ name, tag }) {
    return (
        <div className="p-3 grid grid-cols-[1fr_2fr_1fr] items-center hover:bg-grey-1 cursor-pointer">
            <div>
                <img className="h-14 w-14 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">{name}</span>
                <span className="text-grey-5">{tag}</span>
            </div>
            <div>
                <span className="px-3 py-1.5 rounded-full bg-black-4 text-sm text-white-1 font-semibold">Follow</span>
            </div>
        </div>
    )
}

export default Aside;