import { useNavigate, useParams } from "react-router";
import { HomeWrapper } from '../components/GlobalStyles';
import { DescriptionButton } from "../components/GlobalStyles";
import styled from "styled-components";

const DetailDescription = styled.p`
    width: 90%;
`;

const GithubRedirect = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: white;

    :hover {
        color: #0F0;
        transition: color 0.5s ease;
    }
`;


const ProjectDetail = (props) => {
    const params = useParams();
    let navigate = useNavigate();
    const obj = props.data[params.projectId];

    for (let i = 0; i < obj.galery.length; i ++) {
        obj.galery[i].url = props.media_url + obj.galery[i].image;
    }

    const imageList = obj.galery.map((elem) => {
        const imgTest = new Image();
        imgTest.src = elem.url;

        const factor = 0.6;
        const lWidth = window.screen.width;
        const width = imgTest.width;
        let scale;
        let new_width;

        if (width > lWidth * factor) {
            scale = (width * factor) / lWidth;
            new_width = width * scale;
        } else {
            new_width = width;
        }

        return <div key={elem.id}>
            <h3>{elem.description} - {elem.dt}</h3>
            <img style={{ width: `${new_width}px`}} src={elem.url} alt="" />
        </div>
    });
    
    console.log(imageList.length)

    return <HomeWrapper>
        <h1>{obj.name} </h1>
        
        <p><GithubRedirect href="#"><i style={{fontSize:'34px', marginRight: '20px'}} className="fa fa-github" aria-hidden="true" /></GithubRedirect> <strong>Github: </strong>https://github.com</p>
        <p><i style={{fontSize:'34px', marginRight: '20px'}} className="fa fa-code" aria-hidden="true"></i>
            <strong>FOSS: </strong> 
            { obj.os ? "Yes" : "No" }
        </p>

        <DetailDescription>
            <strong>Description: </strong>
            {obj.description} 
        </DetailDescription>

        <DescriptionButton style={{ marginBottom: "10px"}} onClick={() => navigate('/projects')}>Back</DescriptionButton>

        {
            imageList.length === 0
            ? ""
            : <div>
                <p><strong>Galery: </strong></p>
                {imageList}

                <DescriptionButton onClick={() => navigate('/projects')}>Back</DescriptionButton>
            </div>
        }

    </HomeWrapper>
}

export default ProjectDetail;