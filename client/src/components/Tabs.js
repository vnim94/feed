import { useParams } from 'react-router-dom';

function Tabs({children}) {
    return (
        <ul className="flex flex-row flex-grow justify-around">
            {children}
        </ul>
    )
}

export function Tab({ text, link }) {

    const { tab } = useParams();

    return (
        <li className="flex flex-row flex-grow justify-center hover:bg-grey-3 cursor-pointer">
            <a className="py-3 w-full text-center" href={link}>
                <span className={`${tab === text.toLowerCase().replace(' ','-') ? 'font-bold text-black-4 border-b-4 border-b-green-7' : 'text-grey-5'} pb-2.5`}>{text}</span>
            </a>
        </li>
    )
}

export default Tabs;