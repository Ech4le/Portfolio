import { useState, useEffect } from 'react';
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
import axios from "axios";

const App = () => {
	const [active, setActive] = useState(0);
    const [dataInput, setDataInput] = useState({});

    const url = 'http://localhost:5000/';
    const media_url = "http://localhost:5000/files/";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                const input = res.data;
                setDataInput({ input });
            })
    }, [])
    if (dataInput.input === undefined) {
        return <p>Loading...</p>
    };

    const data = dataInput.input.data;

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
					<Route path="/projects" element={<Projects data={data} media_url={media_url} />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:projectId" element={<ProjectDetail data={data} media_url={media_url} />} />
				</Routes>
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
