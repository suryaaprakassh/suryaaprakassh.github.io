import {
	Link,
	Outlet,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Projects from "../components/Projects.jsx";
import Home from "../components/Home";
import Skills from "../components/Skills";
const Nav = () => {
	return (
		<>
			<div className="p-5 flex justify-between items-center">
				<h1 className="text-2xl font-bold text-white">
					Surya<span className="text-emerald-400">Prakash</span>
				</h1>
				<div className="w-2/5 flex justify-between px-5 text-white text-lg">
					<Link to="/" className="link-primary">
						Home
					</Link>
					<Link to="/skills" className="link-primary">
						Skills
					</Link>
					<Link to="/projects" className="link-primary">
						Projects
					</Link>
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</>
	);
};
export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Nav />}>
			<Route index element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/skills" element={<Skills />} />
		</Route>
	)
);
