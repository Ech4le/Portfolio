import { HomeWrapper, ReactIcon, PythonIcon } from '../components/GlobalStyles';

const Home = (props) => {

    return <HomeWrapper>
        <h1>Hi !</h1>
        <h1>I'm Konrad Nawara.</h1>
        <p>
            Robotics student, software engineer 
            interested in Python / C++ / JS technology.
        </p>
        <p>
            Electronics components designer, favorite boards: 
            Arduino / STM32.
        </p>
        <p className="lastLine">
            All code is tested and developed on my homelab.
        </p>

        <PythonIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <ReactIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <h3>Open source packages: <span className="stat"> {props.stats.os_packages} </span></h3>
        <h3>Closed source packages: <span className="stat"> {props.stats.nos_packages} </span></h3>
        
    </HomeWrapper>
}

export default Home;