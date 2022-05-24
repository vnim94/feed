import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Tabs() {

    const [selected, setSelected] = useState('For you');

    return (
        <div className="flex flex-row flex-grow justify-around">
            <Tab selected={selected} setSelected={setSelected} text="For you"/>
            <Tab selected={selected} setSelected={setSelected} text="Trending"/>
            <Tab selected={selected} setSelected={setSelected} text="News"/>
            <Tab selected={selected} setSelected={setSelected} text="Sports"/>
            <Tab selected={selected} setSelected={setSelected} text="Entertainment"/>
        </div>
    )
}

function Tab({ selected, setSelected, text }) {

    const navigate = useNavigate();

    const handleClick = () => {
        setSelected(text);
        navigate(`tabs/${text.toLowerCase().replace(' ','-')}`);
    }

    return (
        <div className="flex flex-row flex-grow justify-center hover:bg-grey-3 cursor-pointer" onClick={handleClick}>
            <div className={`${selected === text && 'border-b-4 border-b-green-7'} py-3 `}>
                <span className={`${selected === text ? 'font-bold text-black-4' : 'text-grey-5'}`}>{text}</span>
            </div>
        </div>
    )
}

export default Tabs;