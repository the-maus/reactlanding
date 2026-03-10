import { Check, Clock, Star } from "lucide-react";
import React from "react";

const Pricing = () => {
	return (
		<>
			<section id="pricing" className="mx-auto max-w-6xl px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-20">
					<div>
						<h2 className="text-3xl font-bold">
							Single Plan, No Complications
						</h2>
						<p className="text-slate-300 mt-4 max-w-2xl">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Cumque ipsam temporibus consequuntur fuga
							nisi, asperiores molestiae unde magni.
						</p>
						<ul className="mt-4 space-y-2 text-sm text-slate-300">
							<li className="flex items-center gap-2">
								<Check className="size-4 text-emerald-400" />{" "}
								Benefit 1
							</li>
							<li className="flex items-center gap-2">
								<Check className="size-4 text-emerald-400" />{" "}
								Benefit 2
							</li>
							<li className="flex items-center gap-2">
								<Check className="size-4 text-emerald-400" />{" "}
								Benefit 3
							</li>
						</ul>
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
						<div className="text-sm text-slate-400">From</div>
						<div className="text-5xl font-extrabold mt-2">
							$199.99
						</div>
						<div className="text-sm text-slate-300 mt-4 flex items-center gap-2">
							<Clock className="size-4 text-amber-400" />
							<p>Today only!</p>
						</div>
						<button
							href="#"
							className="mt-6 cursor-pointer rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-800 px-6 py-3 font-medium"
						>Buy Now!</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pricing;
