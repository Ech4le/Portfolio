import { HomeWrapper, Link } from '../components/GlobalStyles';

const Contact = () => {
    return <HomeWrapper>
        <h1>Contact me: </h1>
        <p>
            <Link href="https://github.com/Ech4le"><i style={{fontSize:'34px', marginRight: '20px'}} className="fa fa-github" aria-hidden="true" /> Ech4le </Link>
        </p>
        <p>
            <i style={{fontSize:'34px', marginRight: '20px'}} className="fa fa-envelope-o" aria-hidden="true"></i> eclipse.nsl@gmail.com
        </p>
        

    </HomeWrapper>
}

export default Contact;