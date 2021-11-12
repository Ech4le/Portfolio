import styled from "styled-components";

const HomeWrapper = styled.div`
    margin-top: 2em;
    padding-left: 7%;
    padding-top: 4em;

    .stat {
        margin-left: 10px;
    }

    .lastLine {
        margin-bottom: 50px;
    }
`;

const HomeFirstIcon = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    padding: 15px;

    :hover {
        background-color: #202020;
        transition: background-color 0.5s ease;
    }
`;

const HomeNextIcon = styled.img`
    margin-left: 70px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    padding: 15px;

    :hover {
        background-color: #202020;
        transition: background-color 0.5s ease;
    }
`;

const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #FFF;

    :hover {
        color: #0F0;
    }
`;

const NavbarHolder = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #202020;
    border-bottom: .5px solid #383838;
`;


const MainWrapper = styled.main`
	padding-left: 6em;
	padding-right: 6em;
`;

const DescriptionButton = styled.p`
    text-decoration: none;
    color: #0F0;
    background-color: #000;
    border: 1px solid #0F0;
    padding: 16px;
    margin-bottom: 100px;
    display: inline-block;
    cursor: pointer;

    :hover {
        background-color: #000;
        border: 1px solid #FFF;
        color: #FFF;
        transition: color 0.25s ease;
        transition: border 0.5s ease;
    }
`;

export {
    HomeWrapper,
    Link,
    HomeFirstIcon as PythonIcon,
    HomeNextIcon as ReactIcon,
    MainWrapper,
    NavbarHolder,
    DescriptionButton
}
