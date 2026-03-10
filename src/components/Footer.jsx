import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="border-t border-white/5">
				<div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
					<div className="mb-4">My Brand @ { new Date().getFullYear()}</div>
                    <a href="" className="text-slate-300">Privacy Policies</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
