import Container from '../components/Container';
import SearchBar from '../components/Search';
import NavBar from '../components/NavBar';

function Explore() {
    return (
        <Container>
            <NavBar selected="explore"/>
            <div className="border border-x-grey-3">
                <SearchBar />
            </div>
        </Container>
    )
}

export default Explore;