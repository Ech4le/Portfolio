import styled from "styled-components";

const HomeWrapper = styled.div`
    margin-top: 2em;
    padding-left: 8em;
    padding-top: 2em;

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
    width: 100%;
    background-color: #000;
`;

const NavbarWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    margin-top: 1em;
    margin-left: 7em;
    margin-right: 18em;

    .active span {
        color: #04FA6D;
    }

    .home {
        float: left;
    }

    .CV {
        background-color: green;
        margin-left: 4em;
    }
`;

const LiWrapper = styled.li`
    float: right;
`;

const InnerWrapper = styled.span`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover:not(.active) {
        background-color: #111;
    }
`;

const MainWrapper = styled.main`
	padding-left: 6em;
	padding-right: 6em;
`;

export {
    HomeWrapper,
    Link,
    PythonIcon,
    ReactIcon,
    NavbarWrapper,
    LiWrapper,
    InnerWrapper,
    MainWrapper,
    NavbarHolder
}
