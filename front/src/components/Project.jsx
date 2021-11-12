import styled from "styled-components"

const DescriptionButton = styled.a`
    text-decoration: none;
    color: #0F0;
    background-color: #000;
    border: 1px solid #0F0;
    padding: 16px;
    margin-bottom: 100px;
    display: inline-block;
`;

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
`;

const Project = (props) => {    
    return <ProjectWrapper>
        <div className="one">
            <h2>{props.name}</h2>
            <ProjectDescription>{props.description}</ProjectDescription>
            <DescriptionButton href={props.link}>Details</DescriptionButton>
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