import { Link } from 'react-router-dom';
import { NavbarWrapper, LiWrapper, InnerWrapper } from '../components/GlobalStyles';

const Navbar = (props) => {

    const handleClick = (id) => {
        props.setActive(id);
    }

    const liElems = props.elems.map((elem, i) => {
        if (i === 0) {
            return <Link key={elem.id} onClick={() => handleClick(elem.id)} to={elem.url}>
                <LiWrapper className={ props.active === elem.id ? "active home" : "home" }><InnerWrapper>
                    { elem.icon !== undefined 
                    ? <i style={{fontSize:'34px', marginRight: '20px'}} class={elem.icon} aria-hidden="true" />
                    : ""
                    }
                {elem.title}
            </InnerWrapper></LiWrapper></Link>
        }
        if (i === 1) {
            return <Link key={elem.id} to={elem.url}><LiWrapper className={ props.active === elem.id ? "active CV cv" : "CV cv" }><InnerWrapper>
                { elem.icon !== undefined 
                ? <i style={{fontSize:'28px', marginRight: '18px'}} class={elem.icon} aria-hidden="true" />
                : ""
                }
                {elem.title}
            </InnerWrapper></LiWrapper></Link>
        }
        return <Link key={elem.id} onClick={() => handleClick(elem.id)} to={elem.url}>
            <LiWrapper className={ props.active === elem.id ? "active" : "" }><InnerWrapper>
                { elem.icon !== undefined 
                ? <i style={{fontSize:'28px', marginRight: '18px'}} class={elem.icon} aria-hidden="true" />
                : ""
                }
                {elem.title}
        </InnerWrapper></LiWrapper></Link>
    })
    return <NavbarWrapper>
        { liElems }
    </NavbarWrapper>
}

export default Navbar;