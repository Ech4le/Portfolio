import styled from "styled-components";

const HomeWrapper = styled.div`
    margin-top: 2em;
    padding-left: 8em;
    padding-top: 4em;

    .stat {
        margin-left: 10px;
    }

    .lastLine {
        margin-bottom: 50px;
    }
`;

const PythonIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
`;

const ReactIcon = styled.img`
    margin-left: 70px;
    margin-bottom: 50px;
    width: 100px;
    height: 100px;
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
    padding-left: 6em;
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
    PythonIcon,
    ReactIcon,
    MainWrapper,
    NavbarHolder,
    DescriptionButton
}
