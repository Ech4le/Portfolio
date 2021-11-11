import Navbar from './components/Navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import styled from 'styled-components';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { useState } from 'react';
import "./App.css"

const MainWrapper = styled.main`
	padding-left: 6em;
	padding-right: 6em;
`;

const App = () => {
	const [active, setActive] = useState(0);
	const elems = [
		{ id: 0, title: "Home", url: "/" },
		{ id: 1, title: "Get CV", url: "/cv" },
		{ id: 2, title: "Contact", url: "/contact" },
		{ id: 3, title: "Blog", url: "/blog" },
		{ id: 4, title: "Projects", url: "/projects" },
	];

	const stats = {
		os_packages: 2,
		nos_packages: 5
	}

	return (
		<BrowserRouter>
			<MainWrapper>
				<Navbar elems={elems} active={active} setActive={setActive} />
				<Routes>
					<Route path="/" element={<Home stats={stats}/>} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
