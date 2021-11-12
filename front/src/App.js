import { useState } from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { MainWrapper, NavbarHolder } from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Contact from "./pages/contact";
import Projects from './pages/projects';
import Raspberry from "./assets/Raspberry.jpg"
import ProjectDetail from './pages/project-detail';
import "./App.css"

const App = () => {
	const [active, setActive] = useState(0);
    const data = [
        { 
            id: 0, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: false,
            image: Raspberry
        },
        { 
            id: 1, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: false,
            image: Raspberry
        },
        { 
            id: 2, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: Raspberry
        },
        { 
            id: 3, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: false,
            image: Raspberry
        },
        { 
            id: 4, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: true,
            image: Raspberry
        },
    ]

	const stats = {
		os_packages: 2,
		nos_packages: 5
	}

	return (
		<BrowserRouter>
			<MainWrapper>
				<NavbarHolder>
					<Navbar active={active} setActive={setActive} />
				</NavbarHolder>
				<Routes>
					<Route path="/" element={<Home stats={stats}/>} />
					<Route path="/projects" element={<Projects data={data} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:projectId" element={<ProjectDetail data={data} />} />
				</Routes>
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
