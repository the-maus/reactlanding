import { Shield, Sparkles, Star, Zap } from "lucide-react";

const Features = () => {
	const features = [
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Sparkles className="size-5 text-fuchsia-400" />,
		},
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Star className="size-5 text-emerald-400" />,
		},
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Zap className="size-5 text-amber-400" />,
		},
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Shield className="size-5 text-sky-400" />,
		},
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Star className="size-5 text-emerald-400" />,
		},
		{
			title: "Responsive Design",
			desc: "It works in any screen size",
			icon: <Sparkles className="size-5 text-fuchsia-400" />,
		},
	];

	return (
		<>
			<section id="features" className="mx-auto max-w-6xl px-4 py-8">
				<h2 className="text-3xl font-bold">All you need</h2>
				<p className="text-slate-300 mt-2 max-w-2xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer ornare sem in eros tincidunt aliquam. Vivamus
					sagittis elit leo.
				</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
						>
							<div className="flex items-center gap-3">
								{feature.icon}
								<p className="font-semibold">{feature.title}</p>
							</div>
							<p className="text-sm text-slate-400 mt-2">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Features;
