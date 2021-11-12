import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarHome from './NavbarHome';
import NavbarItem from './NavbarItem';
import NavbarCV from './NavbarCV';

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
`;

const Navbar = (props) => {

    const handleClick = (id) => {
        props.setActive(id);
    }

    return <NavbarWrapper>
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