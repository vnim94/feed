import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDays } from '../util/helpers';

export function Login() {

    const navigate = useNavigate();

    const loginField = useRef();
    const [loginFocused, setLoginFocused] = useState(false);
    const [login, setLogin] = useState('');

    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-grey-5 flex flex-row justify-center items-center">
            <div className="relative bg-white-1 rounded-xl">
                <span className="absolute cursor-pointer left-3 top-3 p-1 material-icons-outlined rounded-full hover:bg-grey-3" onClick={() => navigate('/')}>close</span>
                <div className="flex flex-row justify-center mt-2">
                    <img className="h-12 w-12 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                </div>
                <div className="h-[600px] w-[600px] flex flex-col items-center">
                    <div className="w-1/2">
                        <div className="py-8">
                            <span className="font-bold text-3xl">Create your account</span>
                        </div>
                        <div className="flex flex-col">
                            <button className="py-2 my-1 bg-white-1 border font-bold border-grey-4 rounded-full flex items-center justify-center hover:bg-grey-1">
                                <img className="h-5 w-5 mr-1" src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png" alt="google"></img>
                                <span>Sign up with Google</span>
                            </button>
                            <button className="py-2 mt-5 bg-white-1 border font-bold border-grey-4 rounded-full flex items-center justify-center hover:bg-grey-1">
                               <img className="h-5 w-5 mr-1" src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"></img> 
                               <span>Sign up with Apple</span>
                            </button>
                        </div>
                        <div className="py-2 flex flex-row items-center">
                            <div class="flex-grow border-t border-grey-4"></div>
                            <span className="text-base px-2 mb-1">or</span>
                            <div class="flex-grow border-t border-grey-4"></div>
                        </div>
                        <div className={`${loginFocused && 'outline outline-1 outline-green-7 border-green-7'} relative border border-grey-4 rounded-md p-2 pt-7 flex flex-col`} onClick={() => loginField.current.focus()}>
                            <label className={`absolute text-grey-6 duration-100 ${loginFocused || login.length > 0 ? 'text-sm top-1' : 'text-lg top-3.5'}`}>Phone, email, or username</label>
                            <input ref={loginField} className="outline-none" type="text" onFocus={() => setLoginFocused(true)} onBlur={() => setLoginFocused(false)} value={login} onChange={(e) => setLogin(e.target.value)}></input>
                        </div>
                        <div className="flex flex-col">
                            <button className="py-2 mt-5 bg-black-4 border font-bold text-white-1 border-grey-4 rounded-full flex items-center justify-center hover:bg-black-3">
                               <span>Next</span>
                            </button>
                            <button className="py-2 mt-5 bg-white-1 border font-bold border-grey-4 rounded-full flex items-center justify-center hover:bg-grey-1">
                               <span>Forgot password?</span>
                            </button>
                        </div>
                        <div className="py-10">
                            <span>Don't have an account? </span> 
                            <span className="cursor-pointer text-green-6 hover:underline" onClick={() => navigate('/signup')}>Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Signup() {

    const navigate = useNavigate();

    const nameField = useRef();
    const contactField = useRef();
    const [nameFocused, setNameFocused] = useState(false);
    const [contactFocused, setContactFocused] = useState(false);
    const [contactMethod, setContactMethod] = useState('Phone');

    const monthField = useRef();
    const dayField = useRef();
    const yearField = useRef();
    const [monthFocused, setMonthFocused] = useState(false);
    const [dayFocused, setDayFocused] = useState(false);
    const [yearFocused, setYearFocused] = useState(false);

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const missingInput = name.length === 0 || contact.length === 0 || month.length === 0 || day.length === 0 || year.length === 0;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleClick = () => {
        if (contactMethod === 'Phone') {
            setContactMethod('Email');
        } else {
            setContactMethod('Phone')
        }
        if (contact.length > 0) setContact('');
    }

    const validContact = (contact) => {
        if (contact.length > 0 && ((contactMethod === 'Phone' && contact.match('[^0-9]')) || (contactMethod === 'Email' && !contact.match('.*@.*.com')))) {
            return true;
        }
        return false;
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-grey-6 bg-opacity-80 flex flex-row justify-center items-center z-10">
            <div className="relative bg-white-1 rounded-xl">
                <span className="absolute cursor-pointer left-3 top-3 p-1 material-icons-outlined rounded-full hover:bg-grey-3" onClick={() => navigate('/')}>close</span>
                <div className="flex flex-row justify-center mt-2">
                    <img className="h-12 w-12 rounded-full" src="/phunky-panda.png" alt="avatar"></img>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-4/5">
                        <div className="py-8">
                            <span className="font-bold text-3xl">Create your account</span>
                        </div>
                        <div className={`${nameFocused && 'outline outline-1 outline-green-7 border-green-7'} relative border border-grey-4 rounded-md p-2 mb-6 flex flex-col`} onClick={() => nameField.current.focus()}>
                            <label className={`absolute text-grey-6 duration-100 ${nameFocused || name.length > 0 ? 'text-sm top-1' : 'text-lg top-3.5'}`}>Name</label>
                            <div className="flex justify-end mb-1">
                                <span className={`${!nameFocused && 'invisible'} text-xs`}>{name.length} / 50</span>
                            </div>
                            <input ref={nameField} className="outline-none" type="text" onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)} value={name} onChange={(e) => e.target.value.length < 51 && setName(e.target.value)}></input>
                        </div>
                        <div className={`${contactFocused && 'outline outline-1 outline-green-7 border-green-7'} ${validContact(contact) && 'outline-[#dc2626] border-[#dc2626]'} relative border border-grey-4 rounded-md p-2 pt-7 flex flex-col`} onClick={() => contactField.current.focus()}>
                            <label className={`absolute text-grey-6 duration-100 ${contactFocused || contact.length > 0 ? 'text-sm top-1' : 'text-lg top-3.5'}`}>{contactMethod}</label>
                            <input ref={contactField} className="outline-none" type="text" onFocus={() => setContactFocused(true)} onBlur={() => setContactFocused(false)} value={contact} onChange={(e) => setContact(e.target.value)}></input>
                        </div>
                        {validContact(contact) ? contactMethod === 'Phone' ? <span className="text-xs text-[#dc2626]">Please enter a valid phone number.</span> : <span className="text-xs text-[#dc2626]">Please enter a valid email address.</span> : undefined}
                        <div className="flex flex-row justify-end">
                            <span className="mt-2 text-green-5 cursor-pointer hover:underline" onClick={handleClick}>Use {contactMethod === 'Phone' ? 'email' : 'phone'} instead</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold mt-5">Date of birth</span>
                            <span className="text-xs py-1">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                        </div>
                        <div className="grid grid-cols-[3fr_1.5fr_2fr] gap-x-3 pt-5">
                            <div className={`${monthFocused && 'outline outline-1 outline-green-7 border-green-7'} relative h-16 border border-grey-4 rounded-md mb-3 flex flex-col justify-end`} onClick={() => setMonthFocused(!monthFocused)}>
                                <label className="absolute left-2 top-1 text-sm text-grey-6">Month</label>
                                <span className={`${monthFocused && 'text-green-7'} absolute right-1 top-3.5 text-3xl material-icons-outlined z-10`}>expand_more</span>
                                <select ref={monthField} className="pt-7 pb-2 px-2 rounded-md appearance-none outline-none cursor-pointer bg-transparent z-20" value={month} onBlur={() => setMonthFocused(false)} onChange={(e) => setMonth(e.target.value)}>
                                    <option value="" disabled></option>
                                    {months.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
                                </select>
                            </div>
                            <div className={`${dayFocused && 'outline outline-1 outline-green-7 border-green-7'} relative h-16 border border-grey-4 rounded-md mb-3 flex flex-col justify-end cursor-pointer`} onClick={() => setDayFocused(!dayFocused)} >
                                <label className="absolute left-2 top-1 text-sm text-grey-6">Day</label>
                                <span className={`${dayFocused && 'text-green-7'} absolute right-1 top-3.5 text-3xl material-icons-outlined z-10`}>expand_more</span>
                                <select ref={dayField} className="pt-7 pb-2 px-2 rounded-md appearance-none outline-none cursor-pointer bg-transparent z-20" onBlur={() => setDayFocused(false)} value={day} onChange={(e) => setDay(e.target.value)}>
                                    <option value="" disabled></option>
                                    {Array(month !== '' ? getDays(parseInt(month), parseInt(year)) : 31).fill().map((_,index) => <option key={index} value={index + 1}>{index + 1}</option>)}
                                </select>
                            </div>
                            <div className={`${yearFocused && 'outline outline-1 outline-green-7 border-green-7'} relative h-16 border border-grey-4 rounded-md mb-3 flex flex-col justify-end cursor-pointer`} onClick={() => setYearFocused(!yearFocused)} >
                                <label className="absolute left-2 top-1 text-sm text-grey-6">Year</label>
                                <span className={`${yearFocused && 'text-green-7'} absolute right-1 top-3.5 text-3xl material-icons-outlined z-10`}>expand_more</span>
                                <select ref={yearField} className="pt-7 pb-2 px-2 rounded-md appearance-none outline-none cursor-pointer bg-transparent z-20" onBlur={() => setYearFocused(false)} value={year} onChange={(e) => setYear(e.target.value)}>
                                    <option value="" disabled></option>
                                    {Array(new Date().getFullYear() - 1950).fill().map((_,index) => <option key={index} value={1950 + index}>{1950 + index}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="mt-24">
                            <button className={`${missingInput ? 'bg-grey-5 cursor-not-allowed': 'bg-black-1'} py-3 mb-3 w-full border font-bold text-white-1 border-grey-4 rounded-full flex items-center justify-center`}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}