import styled from 'styled-components';

const LiWrapper = styled.li`
    float: left;
`;

const InnerWrapper = styled.span`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover {
        color: #0F0;
        transition: color 0.5s ease;
    }
`;

const NavbarHome = (props) => {
    return <LiWrapper className={ props.active === 0 ? "active home" : "home" }>
        <InnerWrapper>
            <i style={{fontSize:'34px', marginRight: '20px'}} className={"fa fa-bolt"} aria-hidden="true" />
            {props.children}
        </InnerWrapper>
    </LiWrapper>
}

export default NavbarHome;