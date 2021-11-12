import { useNavigate, useParams } from "react-router";
import { HomeWrapper } from '../components/GlobalStyles';

const ProjectDetail = () => {
    const params = useParams();
    let navigate = useNavigate();
    console.log(params)
    return <HomeWrapper>
        <h1>Hello!</h1>
        <h2>Project id: {params.projectId}</h2>
        <button onClick={() => navigate('/projects')}>Back</button>
    </HomeWrapper>
}

export default ProjectDetail;