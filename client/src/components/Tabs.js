function Tabs() {
    return (
        <div className="flex flex-row flex-grow justify-around">
            <Tab selected={true} text="For you"/>
            <Tab text="Trending"/>
            <Tab text="News"/>
            <Tab text="Sports"/>
            <Tab text="Entertainment"/>
        </div>
    )
}

function Tab({ selected, text }) {
    return (
        <div className="flex flex-row flex-grow justify-center hover:bg-grey-3 cursor-pointer">
            <div className={`${selected && 'border-b-4 border-b-green-7'} py-3 `}>
                <span className={`${selected ? 'font-bold text-black-4' : 'text-grey-5'}`}>{text}</span>
            </div>
        </div>
    )
}

export default Tabs;