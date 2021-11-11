import styled from 'styled-components';

const NavbarWrapper = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-left: 150px;
    margin-right: 120px;

    .active a {
        color: #04FA6D;
    }

    .home {
        float: left;
    }

    .CV {
        background-color: green;
        margin-left: 40px;
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
            return <LiWrapper key={elem.id} className={ props.active === elem.id ? "active home" : "home" }><AWrapper href={elem.url}>
                {elem.title}
            </AWrapper></LiWrapper>
        }
        if (i === 1) {
            return <LiWrapper key={elem.id} className={ props.active === elem.id ? "active CV" : "CV" }><AWrapper href={elem.url}>
                {elem.title}
            </AWrapper></LiWrapper>
        }
        return <LiWrapper key={elem.id} className={ props.active === elem.id ? "active" : "" }><AWrapper href={elem.url}>
            {elem.title}
        </AWrapper></LiWrapper>
    })
    return <NavbarWrapper>
        { liElems }
    </NavbarWrapper>
}

export default Navbar;