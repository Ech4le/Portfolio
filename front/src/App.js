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
import ProjectDetail from './pages/project-detail';
import "./App.css"

const App = () => {
	const [active, setActive] = useState(0);
	const elems = [
		{ id: 0, title: "Home", url: "/", icon: "fa fa-bolt" },
		{ id: 1, title: "Get CV", url: "/cv", icon: "fa fa-book" },
		{ id: 2, title: "Contact", url: "/contact", icon: "fa fa-address-book" },
		{ id: 3, title: "Blog", url: "/blog", icon: "fa fa-bookmark" },
		{ id: 4, title: "Projects", url: "/projects", icon: "fa fa-bug" },
	];

	const stats = {
		os_packages: 2,
		nos_packages: 5
	}

	return (
		<BrowserRouter>
			<MainWrapper>
				<NavbarHolder>
					<Navbar elems={elems} active={active} setActive={setActive} />
				</NavbarHolder>
				<Routes>
					<Route path="/" element={<Home stats={stats}/>} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:projectId" element={<ProjectDetail />} />
				</Routes>
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
