import Navbar from './components/Navbar';
import { useState } from 'react';
import "./App.css"

function App() {
  const [ active ] = useState(0);
  const elems = [
      { id: 0, title: "Home", url: "#" },
      { id: 1, title: "Get CV", url: "#" },
      { id: 2, title: "Contact", url: "#" },
      { id: 3, title: "Blog", url: "#" },
      { id: 4, title: "Projects", url: "#" },
  ]
  return (
    <Navbar elems={elems} active={active}/>
  );
}

export default App;
