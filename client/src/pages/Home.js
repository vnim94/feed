import Container from '../components/Container';
import NavBar from '../components/NavBar';
import Feed, { HomeBanner, FeedBox, Card } from '../components/Feed';
import Aside from '../components/Aside';
import SearchBar from '../components/Search';
import { AsideCard, WhatItem, WhoItem } from '../components/Aside';


function Home() {
    return (
        <Container>
            <NavBar selected="home"/>
            <Feed>
                <HomeBanner/>
                <FeedBox/>
                {Array(10).fill().map((_,index) => <Card key={index}/>)}
            </Feed>
            <Aside>
                <SearchBar/>
                <AsideCard heading="What's happening">
                    <WhatItem heading="Heading" text="text" topic="Topic" icon={true} live={true}/>
                    <WhatItem heading="Heading" text="text" topic="Topic" img="/phunky-panda.png"/>
                </AsideCard>
                <AsideCard heading="Who to follow">
                    <WhoItem name="Name" tag="@Name"/>
                </AsideCard>
            </Aside>
        </Container>
    )
}

export default Home;