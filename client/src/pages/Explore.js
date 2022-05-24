import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import SearchBar from '../components/Search';
import NavBar from '../components/NavBar';
import Aside, { AsideCard, WhoItem, WhatItem } from '../components/Aside';
import Feed, { Card, ImgCard, SectionBanner, TrendCard } from '../components/Feed';
import Tabs from '../components/Tabs';

function Explore() {

    const { tab } = useParams();
    const selectedTab = (tab) => {
        switch(tab) {
            case 'trending':
                return <Trending/>
            case 'news':
                return <News/>
            case 'sports':
                return <Sports/>
            case 'entertainment':
                return <Entertainment/>
            default:
                return <Home/>
        }
    }

    return (
        <Container>
            <NavBar selected="explore"/>
            <Feed>
                <div className="pl-5 pr-2 py-1 flex flex-row items-center">
                    <SearchBar />
                    <div className="pl-10">
                        <span className="px-2 py-1 text-xl text-grey-6 material-icons-outlined rounded-full hover:bg-green-1 cursor-pointer">settings</span>
                    </div>
                </div>
                <Tabs/>
                {selectedTab(tab)}
            </Feed>
            <Aside>
                <AsideCard heading="Who to follow">
                    <WhoItem name="Forbes" tag="@forbes" link="/"/>
                </AsideCard>
            </Aside>
        </Container>
    )
}

function Home() {
    return (<>
        <ImgCard heading="Heading" text="text" topic="topic" live={true}/>
        <WhatItem heading="Heading" text="text" topic="Topic" icon={true} live={true}/>
        <WhatItem heading="Heading" text="text" topic="Topic" img="/phunky-panda.png"/>
        <div className="rounded-xl">
            <div className="p-3">
                <span className="font-bold text-xl">Who to follow</span>
            </div>
            <WhoItem name="Forbes" tag="@forbes" link="/"/>
        </div>
        <SectionBanner heading="Tech news"/>
        {Array(10).fill().map((_,index) => <Card key={index}/>)}
    </>)
}

function Trending() {
    return (
        <div>
            <TrendCard title="Title" ranking={1} tweets={2228}/>
        </div>
    )
}

function News() {
    return (
        <div></div>
    )
}

function Sports() {
    return (
        <div></div>
    )
}

function Entertainment() {
    return (
        <div></div>
    )
}

export default Explore;