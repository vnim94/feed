import { useNavigate } from 'react-router-dom';

function Splash() {

    const navigate = useNavigate();

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
                        <div className="w-80 flex flex-col">
                            <button className="py-3 my-1 bg-white-1 border font-bold border-grey-4 rounded-full flex items-center justify-center hover:bg-grey-1">
                                <img className="h-5 w-5 mr-1" src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png" alt="google"></img>
                                <span>Sign up with Google</span>
                            </button>
                            <button className="py-3 my-1 bg-white-1 border font-bold border-grey-4 rounded-full flex items-center justify-center hover:bg-grey-1">
                               <img className="h-5 w-5 mr-1" src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"></img> 
                               <span>Sign up with Apple</span>
                            </button>
                            <div className="flex justify-center">
                                <span className="">or</span>
                            </div>
                            <button className="py-3 my-1 bg-green-8 text-white-1 font-bold border rounded-full hover:bg-green-7" onClick={() => navigate('signup')}>Sign up with phone or email</button>
                            <span className="py-1 text-xs">
                                By signing up, you agree to the 
                                <a className="text-green-5" href="/"> Terms of Service</a> and 
                                <a className="text-green-5" href="/"> Privacy Policy</a>, including 
                                <a className="text-green-5" href="/"> Cookie Use</a>.
                            </span>
                        </div>
                        <div className="my-16 w-80 flex flex-col">
                            <span className="py-5 text-lg"><b>Already have an account?</b></span>
                            <button className="py-3 my-1 bg-white-1 border text-green-5 font-bold border-grey-4 rounded-full hover:bg-grey-1" onClick={() => navigate('login')}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 text-sm text-grey-7 flex flex-row flex-wrap justify-center">
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