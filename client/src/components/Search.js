import { useState } from 'react';

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
        <div className="absolute w-full flex flex-col bg-white-1 shadow-lg rounded-xl">
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

export default SearchBar;