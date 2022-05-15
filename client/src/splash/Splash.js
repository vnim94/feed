function Splash() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="h-full flex flex-row">
                <div className="w-1/2 flex flex-row items-center">
                    <img src="/panda-feed.jpeg" alt="panda-feed"></img>
                </div>
                <div className="px-10 w-1/2 flex flex-col justify-center">
                    <div>
                        <div>
                            <img className="h-16 w-16 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                        </div>
                        <div className="py-10">
                            <span className="text-7xl"><b>Get your feed</b></span>
                        </div>
                        <div className="py-8">
                            <span className="text-3xl"><b>Join Feed today.</b></span>
                        </div>
                        <div className="w-96 flex flex-col">
                            <button className="py-3 my-1 bg-white border font-bold border-light-grey rounded-full hover:bg-pale-grey">Sign up with Google</button>
                            <button className="py-3 my-1 bg-white border font-bold border-light-grey rounded-full hover:bg-pale-grey">Sign up with Apple</button>
                            <div className="flex justify-center">
                                <span className="">or</span>
                            </div>
                            <button className="py-3 my-1 bg-dark-green text-white font-bold border rounded-full hover:bg-green">Sign up with phone or email</button>
                            <span className="py-1 text-xs">
                                By signing up, you agree to the 
                                <a className="text-green" href="/"> Terms of Service</a> and 
                                <a className="text-green" href="/"> Privacy Policy</a>, including 
                                <a className="text-green" href="/"> Cookie Use</a>.
                            </span>
                        </div>
                        <div className="my-16 w-96 flex flex-col">
                            <span className="py-5 text-lg"><b>Already have an account?</b></span>
                            <button className="py-3 my-1 bg-white border text-green font-bold border-light-grey rounded-full hover:bg-pale-grey">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 text-sm text-dark-grey flex flex-row flex-wrap justify-center">
                <a className="p-2 hover:underline" href="/">About</a>
                <a className="p-2 hover:underline" href="/">Help Center</a>
                <a className="p-2 hover:underline" href="/">Terms of Service</a>
                <a className="p-2 hover:underline" href="/">Privacy Policy</a>
                <a className="p-2 hover:underline" href="/">Cookie Policy</a>
                <a className="p-2 hover:underline" href="/">Accessibility</a>
                <a className="p-2 hover:underline" href="/">Ads Info</a>
                <a className="p-2 hover:underline" href="/">Blog</a>
                <a className="p-2 hover:underline" href="/">Status</a>
                <a className="p-2 hover:underline" href="/">Careers</a>
                <a className="p-2 hover:underline" href="/">Brand Resources</a>
                <a className="p-2 hover:underline" href="/">Advertising</a>
                <a className="p-2 hover:underline" href="/">Marketing</a>
                <a className="p-2 hover:underline" href="/">Business</a>
                <a className="p-2 hover:underline" href="/">Developers</a>
                <a className="p-2 hover:underline" href="/">Directory</a>
                <a className="p-2 hover:underline" href="/">Settings</a>
                <span className="p-2">© 2022 Feed, Inc.</span>
            </div>
        </div>
    )
}

export default Splash;