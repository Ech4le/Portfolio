import { HomeWrapper } from '../components/GlobalStyles';
import Project from '../components/Project';

const Projects = (props) => {
    const data = props.data;
    const dataList = data.map((elem) => <Project media_url={props.media_url} key={elem.id} name={elem.name} description={elem.description} link={"/projects/" + elem.id} image={elem.image} />)
    return <HomeWrapper>
        <h1>My projects:</h1>
        { dataList }
    </HomeWrapper>
}

export default Projects;