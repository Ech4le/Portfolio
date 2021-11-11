import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-top: 1em;
    margin-left: 7em;
    margin-right: 8em;

    .active a {
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

const AWrapper = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover:not(.active) {
        background-color: #111;
    }
`;

const Navbar = (props) => {

    const liElems = props.elems.map((elem, i) => {
        if (i === 0) {
            return <Link onClick={() => props.setActive(elem.id)} to={elem.url}><LiWrapper key={elem.id} className={ props.active === elem.id ? "active home" : "home" }><AWrapper>
                {elem.title}
            </AWrapper></LiWrapper></Link>
        }
        if (i === 1) {
            return <Link to={elem.url}><LiWrapper key={elem.id} className={ props.active === elem.id ? "active CV" : "CV" }><AWrapper>
                {elem.title}
            </AWrapper></LiWrapper></Link>
        }
        return <Link onClick={() => props.setActive(elem.id)} to={elem.url}><LiWrapper key={elem.id} className={ props.active === elem.id ? "active" : "" }><AWrapper>
            {elem.title}
        </AWrapper></LiWrapper></Link>
    })
    return <NavbarWrapper>
        { liElems }
    </NavbarWrapper>
}

export default Navbar;