import { useNavigate, useParams } from "react-router";
import { HomeWrapper } from '../components/GlobalStyles';
import { DescriptionButton } from "../components/GlobalStyles";
import styled from "styled-components";

const DetailDescription = styled.p`
    width: 90%;
`;


const ProjectDetail = (props) => {
    const params = useParams();
    let navigate = useNavigate();
    const obj = props.data[params.projectId];
    
    return <HomeWrapper>
        <h1>{obj.name} </h1>
        <DetailDescription>Description: {obj.description} </DetailDescription>
        <h3>Github: asd</h3>
        <DescriptionButton onClick={() => navigate('/projects')}>Back</DescriptionButton>
    </HomeWrapper>
}

export default ProjectDetail;