import { useState } from 'react';

function Aside({ children }) {
    return (
        <div>
            <div className="h-screen fixed top-0">
                <div className="p-3 space-y-4">
                    {children}
                    <Terms/>
                </div>
            </div>
        </div>
    )
}

function Terms() {

    const [more, setMore] = useState(false);

    return (
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
    )
}

export function AsideCard({ children, heading }) {
    return (
        <div className="bg-grey-2 rounded-xl">
            <div className="p-3">
                <span className="font-bold text-xl">{heading}</span>
            </div>
            {children}
        </div>
    )
}

export function WhatItem({ heading, text, topic, icon, img, live }) {
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

export function WhoItem({ name, tag, link }) {
    return (
        <div className="p-3 flex flex-row items-center justify-between hover:bg-grey-1 cursor-pointer">
            <div className="flex flex-row space-x-2">
                <img className="h-14 w-14 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1">
                        <a className="font-semibold hover:underline" href={link}>{name}</a>
                        <span className="text-lg material-icons">verified</span>
                    </div>
                    <span className="text-grey-5">{tag}</span>
                </div>
            </div>
            <div>
                <span className="px-3 py-1.5 rounded-full bg-black-4 text-sm text-white-1 font-semibold">Follow</span>
            </div>
        </div>
    )
}

export default Aside;