import "../index.css";
const Skills = () => {
	return (
		<div className="h-screen flex items-start justify-center" id="skills">
			<div className="w-3/5 h-3/5 rounded-md m-10 flex flex-col">
				<div id="head" className="w-full h-10 ">
					<p className="text-slate-400 font-chivo text-xl font-semibold ">
						<span className="font-sans text-teal-500 mr-2">01.</span>
						About Me
					</p>
				</div>
				<div className="h-full flex">
					<div
						id="content"
						className="w-8/12 text-slate-100 text-lg py-5 leading-loose ">
						My name is{" "}
						<span className="text-teal-500 font-chivo">Suryaprakash</span>, and
						I am currently a college student exploring the world of fullstack
						development. As a student, I am passionate about learning and
						expanding my{" "}
						<span className="text-teal-500 font-chivo">knowledge</span>. I
						believe that continuous education is the key to success in any
						field, and I am committed to honing my skills in order to achieve my
						<p className="text-slate-500 my-5">
							Some technologies i have been working with recently,{" "}
						</p>
						<ul
							className="grid grid-cols-2 text-teal-500 px-5 font-chivo  text-base [&>li]:my-1 "
							id="skills-list">
							<li>HTML</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>Tailswind</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Python</li>
							<li>Flask</li>
						</ul>
					</div>
					<div
						id="photo"
						className="w-4/12 flex justify-center items-start relative">
						<div className="bg-teal-700 rounded-md w-3/4 h-3/4 text-3xl text-slate-300 text-center py-14 leading-loose  absolute z-10 after:content-[''] after:absolute after:w-full after:h-full after:bg-slate-300 after:left-10 after:top-10 after:rounded-sm after:-z-1">
							Sorry will be adding my photo!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
