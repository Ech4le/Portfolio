import styled from 'styled-components';

const LiWrapper = styled.li`
    float: right;
    border-radius: 5px;
    background-color: green;
    margin-left: 4em;
    padding: 2px;
    
    :hover {
        background-color: green;
        color: white;
        a {
            color: white;
        }
    }
`;

const InnerWrapper = styled.span`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover {
        color: #0F0;
    }
`;

const NavbarCV = (props) => {
    return <LiWrapper className={ props.active === 1 ? "active CV" : "CV" }>
        <InnerWrapper>
            <i style={{fontSize:'28px', marginRight: '18px'}} className={"fa fa-book"} aria-hidden="true" />
            {props.children}
        </InnerWrapper>
    </LiWrapper>
}

export default NavbarCV;