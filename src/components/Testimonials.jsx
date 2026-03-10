import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
	return (
		<>
			<section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
				<h2 className="text-3xl font-bold">Approved by users</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
					{[1, 2, 3].map((i) => (
						<blockquote
							key={i}
							className="rounded-2xl border border-white/10 p-6"
						>
							<div className="flex items-center gap-2 text-amber-400">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										className="size-4 fill-current"
									/>
								))}
							</div>
							<p className="mt-3 text-slate-300">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Quae reiciendis iure
								reprehenderit.
							</p>
                            <footer className="mt-3 text-sm text-slate-400">
                                - Customer Name
                            </footer>
						</blockquote>
					))}
				</div>
			</section>
		</>
	);
};

export default Testimonials;
