import styled from "styled-components"
import { Link } from 'react-router-dom';
import { DescriptionButton } from "./GlobalStyles";

const ProjectDescription = styled.p`
    margin-bottom: 26px;
    width: 40em;
`;

const ProjectWrapper = styled.div`
    width: 50em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);

    .one {
        grid-column: 1;
        grid-row: 1;
    }

    .two {
        grid-column: 2;
        grid-row: 1;
    }
`;

const ProjectImage = styled.img`
    width: 300px;
    height: 200px;
    float: right;
    margin-top: 2em;
    margin-left: 1em;
`;

const Project = (props) => {    
    const shrink_value = 400;

    const shrink_description = (desc) => {
        var result = desc.substring(0, shrink_value);
        result += "...";
        return <ProjectDescription>{result}</ProjectDescription>
    }

    return <ProjectWrapper>
        <div className="one">
            <h2>{props.name}</h2>
            { props.description.length > shrink_value 
                ? shrink_description(props.description) 
                : <ProjectDescription>{props.description}</ProjectDescription>
            }
            <Link to={props.link}>
                <DescriptionButton>Details</DescriptionButton>
            </Link>
        </div>
        <div className="two">
            { 
            props.image !== undefined 
                ? <ProjectImage src={props.image} alt=""/> 
                : ""
            }
            
        </div>
    </ProjectWrapper>
}

export default Project