import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
	return (
		<div className="App bg-main ">
			<Navbar />
			<div>
				<Home />
				<Skills />
				<Projects />
			</div>
		</div>
	);
}

export default App;
