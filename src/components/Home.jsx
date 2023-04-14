const Home = () => {
	return (
		<div className="h-[90vh] flex justify-center items-center">
			<div className="h-96 w-3/5 rounded-md">
				<h2 className="font-chivo font-bold text-teal-500">Hi, my name is</h2>
				<h1 className="tracking-wide my-2 text-4xl font-extrabold text-white">
					Surya Prakash.
				</h1>
				<h1 className="tracking-wide my-3 text-4xl font-extrabold text-white/75">
					I Build Stuff for the web.
				</h1>
				<div className="py-2">
					<p className="text-white/80 leading-loose ">
						Hey there! I'm a{" "}
						<span className="text-teal-300">fullstack developer </span>- I do
						front-end, back-end, and everything in between. I can code, debug,
						and deploy with ease, all while cracking jokes about tech. So, if
						you need someone who can make your{" "}
						<span className="text-teal-300">website</span> look great and your
						code run smoothly, while keeping the mood light, I'm your guy!
					</p>
				</div>
				<button className="my-5 border-2 border-teal-500 text-teal-500 py-2 px-5">
					Get In Touch
				</button>
			</div>
		</div>
	);
};

export default Home;
