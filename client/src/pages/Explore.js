import Container from '../components/Container';
import SearchBar from '../components/Search';
import NavBar from '../components/NavBar';
import Aside, { AsideCard, WhoItem, WhatItem } from '../components/Aside';
import Feed, { Card, ImgCard, SectionBanner } from '../components/Feed';
import Tabs from '../components/Tabs';

function Explore() {
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
            </Feed>
            <Aside>
                <AsideCard heading="Who to follow">
                    <WhoItem name="Forbes" tag="@forbes" link="/"/>
                </AsideCard>
            </Aside>
        </Container>
    )
}

export default Explore;