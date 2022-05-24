import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Feed, { NotificationCard } from '../components/Feed';
import Aside, { AsideCard, WhatItem, WhoItem } from '../components/Aside';
import SearchBar from '../components/Search';
import Tabs, { Tab } from '../components/Tabs';

function Notifications() {
    return (
        <Container>
            <NavBar selected="notifications"/>
            <Feed>
                <div className="py-1 flex flex-row items-center justify-between">
                    <div className="p-3">
                        <span className="font-bold text-xl">Who to follow</span>
                    </div>
                    <div className="pr-2">
                        <span className="px-2 py-1 text-xl text-grey-6 material-icons-outlined rounded-full hover:bg-green-1 cursor-pointer">settings</span>
                    </div>
                </div>
                <Tabs>
                    <Tab text="All" link="/notifications"/>
                    <Tab text="Mentions" link="/notifications/mentions"/>
                </Tabs>
                <NotificationCard />
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

export default Notifications;