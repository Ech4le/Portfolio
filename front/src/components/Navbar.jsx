import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarHome from './NavbarHome';
import NavbarItem from './NavbarItem';
import NavbarCV from './NavbarCV';

const NavbarWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    margin-top: 1em;

    .active span {
        color: #04FA6D;
    }
`;

const Navbar = (props) => {

    const [leftMargin, setLeftMargin] = useState(100);
    const [rightMargin, setRightMargin] = useState(200);

    useEffect(() => {
        const handleResize = () => {
            setLeftMargin(10 + window.innerWidth * 0.1);
            setRightMargin(20 + window.innerWidth * 0.1)
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const handleClick = (id) => {
        props.setActive(id);
    }

    return <NavbarWrapper style={{marginLeft: `${leftMargin}px`, marginRight: `${rightMargin}px`}}>
        <Link onClick={() => handleClick(0)} to={"/"}>
        <NavbarHome active={props.active}>
            Home
        </NavbarHome>
        </Link>
        <Link to={"/cv"}>
            <NavbarCV>
                Get CV
            </NavbarCV>
        </Link>
        <Link onClick={() => handleClick(2)} to={"/contact"}>
            <NavbarItem  active={props.active} id={2} icon="fa fa-address-book">
                Contact
            </NavbarItem>
        </Link>
        <Link onClick={() => handleClick(3)} to={"/blog"}>
            <NavbarItem  active={props.active} id={3} icon="fa fa-bookmark">
                Blog
            </NavbarItem>
        </Link>
        <Link onClick={() => handleClick(4)} to={"/projects"}>
            <NavbarItem  active={props.active} id={4} icon="fa fa-bug">
                Projects
            </NavbarItem>
        </Link>
    </NavbarWrapper>
}

export default Navbar;