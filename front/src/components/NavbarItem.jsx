import styled from 'styled-components';

const LiWrapper = styled.li`
    float: right;
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

const NavbarItem = (props) => {
    return <LiWrapper className={ props.active === props.id ? "active" : "" }>
        <InnerWrapper>
            <i style={{fontSize:'28px', marginRight: '18px'}} className={props.icon} aria-hidden="true" />
            {props.children}
        </InnerWrapper>
    </LiWrapper>
}

export default NavbarItem;