import { Link } from "react-scroll";
const Navbar = () => {
	return (
		<div id="Navbar" className="w-full bg-main ">
			<div className="p-5 flex justify-between items-center">
				<h1 className="text-2xl font-bold text-white">
					Surya<span className="text-emerald-400">Prakash</span>
				</h1>
				<div className="w-2/5 flex justify-between px-5 text-white text-lg">
					<ul className="flex justify-between w-full">
						<li className="link-primary">
							<Link
								to="home"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Home
							</Link>
						</li>
						<li className="link-primary">
							<Link
								to="skills"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Skills
							</Link>
						</li>
						<li className="link-primary">
							<Link
								to="projects"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								projects
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
