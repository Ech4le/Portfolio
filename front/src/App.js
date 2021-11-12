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
            image: Raspberry,
            galery: [
                { id: 0, image: Raspberry, description: "Description of image.",    dt: "2020-01-01 11:30" },
                { id: 1, image: Raspberry, description: "Description of image1.",   dt: "2020-01-01 11:30" },
                { id: 2, image: Raspberry, description: "Description of image2.",   dt: "2020-01-01 11:30" },
                { id: 3, image: Raspberry, description: "Description of image3.",   dt: "2020-01-01 11:30" },
            ]
        },
        { 
            id: 1, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: false,
            image: Raspberry,
            galery: []
        },
        { 
            id: 2, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
            image: Raspberry,
            galery: []
        },
        { 
            id: 3, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: false,
            image: Raspberry,
            galery: []
        },
        { 
            id: 4, 
            name: "Good project", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "#",
			os: true,
            image: Raspberry,
            galery: []
        },
    ]

	let stats = {
		os_packages:    0,
		nos_packages:   0
	};

    for (let i = 0; i < data.length; i ++) {
        if (data[i].os) {
            stats.os_packages += 1
        } else {
            stats.nos_packages += 1
        }
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
