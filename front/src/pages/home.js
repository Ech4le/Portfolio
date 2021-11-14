import { HomeWrapper, ReactIcon as HomeNextIcon, PythonIcon as HomeFirstIcon } from '../components/GlobalStyles';
import styled from 'styled-components';

const HomeIconLink = styled.a`
    text-decoration: none;
    color: #FFF;
`;

const Home = (props) => {

    return <HomeWrapper>
        <h1>Hi !</h1>
        <h1>I'm Konrad Nawara.</h1>
        <p>Robotics student.</p>
        <p>Software engineer interested in Python / C++ / JS technology.</p>
        <p>Electronics components designer, favorite boards: Arduino / Raspberry Pi.</p>
        <p>All my code is tested and deployed on my homelab.</p>
        <p>I'm using self-hosted Gitea with Drone to CI / CD software.</p>
        <p>ATM learning STM32 and ROS Systems.</p>

        <h2>My stack:</h2>
        <HomeIconLink href="https://www.python.org/">
            <HomeFirstIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://reactjs.org/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://www.arduino.cc/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://www.raspberrypi.com/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://www.postgresql.org/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://www.docker.com/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
        </HomeIconLink>
        <HomeIconLink href="https://www.linux.org/">
            <HomeNextIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        </HomeIconLink>

        <h2>My projects: </h2>
        <p><strong>Open source packages: </strong><span style={{ marginRight: "20px" }} className="stat"> {props.stats.os_packages} </span><strong> Closed source packages: </strong><span className="stat"> {props.stats.nos_packages} </span></p>
        
    </HomeWrapper>
}

export default Home;