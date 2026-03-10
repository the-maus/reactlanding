import { useState } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	Menu,
	X,
	Star,
	Shield,
	Zap,
	Sparkles,
	Link,
} from "lucide-react";

const navLinks = [
	{ href: "#features", label: "Features" },
	{ href: "#testmonials", label: "Testimonials" },
	{ href: "#pricing", label: "Prices" },
	{ href: "#faq", label: "FAQ" },
];

function App() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
			{/* NavBar */}
			<header className="sticky top-0 z-40 border-b border-white/5">
				<div className="mx-auto max-w-6x1 px-4 py-4 flex items-center justify-between">
					<a href="http://" className="flex items-center gap-2">
						<Sparkles className="size-5 text-fuchsia-400" />
						<span className="font-bold tracking-tight">
							My Brand
						</span>
					</a>

					<nav className="hidden md:flex items-center gap-6 text-sm">
						{navLinks.map((l) => (
							<a
								key={l.href}
								href={l.href}
								className="hover:text-fuchsia-300 transition"
							>
								{l.label}
							</a>
						))}
					</nav>

					<button
						className="md:hidden p-2 rounded-lg"
						onClick={() => setOpen(true)}
					>
						<Menu className="size-5" />
					</button>
				</div>

				{open && (
					<div className="md:hidden">
						<div
							className="fixed bg-black/60"
							onClick={() => setOpen(false)}
						>
							<div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Sparkles className="size-6 text-fuchsia-400" />
										<span className="font-semibold">
											My Brand
										</span>
									</div>
									<button
										className="p-2 rounded-lg"
										onClick={() => setOpen(false)}
									>
										<X className="size-5" />
									</button>
								</div>
								<div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
									{navLinks.map((l) => (
										<a
											key={l.href}
											href={l.href}
											className="text-slate-200"
										>
											{l.label}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				)}
			</header>

			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="mx-auto max-w-6xl px-4 py-20 relative">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-6xl font-extrabold"
					>
						Boost your online presence with a{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
							simple and efficient
						</span>{" "}
						landing page
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="mt-4 text-slate-300 max-w-2xl"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer ornare sem in eros tincidunt aliquam. Vivamus
						sagittis elit leo. Donec sed ex in felis aliquet dictum
						et ac nulla. Curabitur ut mi maximus, sagittis lectus
						eget, sollicitudin neque.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="mt-8 flex flex-row gap-3"
					>
						<a
							href="#"
							className="
								  inline-flex items-center 
								  justify-center gap-2 rounded-2xl 
								  bg-fuchsia-600 px-6 py-3 font-medium 
								  hover:bg-fuchsia-700 transition"
						>
							Star Now <ArrowRight className="size-4" />
						</a>
						<a
							href="#features"
							className="
								  inline-flex items-center 
								  justify-center gap-2 rounded-2xl 
								  px-6 py-3 font-medium 
								  border border-white/10
								  hover:bg-white/5
								  transition"
						>
							Check Features
						</a>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="mt-14 grid grid-cols-3 gap-4"
					>
						{["Speed", "Security", "Conversion"].map((label, i) => (
							<div
								key={label}
								className="rounded-2xl border boder-white/10 bg-white/[0.02] p-6"
							>
								<div className="flex items-center gap-3">
									{i == 0 && (
										<Zap className="size-5 text-emerald-400" />
									)}
									{i == 1 && (
										<Shield className="size-5 text-sky-400" />
									)}
									{i == 2 && (
										<Star className="size-5 text-amber-400" />
									)}
									<div className="font-semibold">{label}</div>
								</div>
								<p className="text-sm text-slate-400 mt-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="mx-auto max-w-6xl px-4 py-8">
				<h2 className="text-3xl font-bold">All you need</h2>
				<p className="text-slate-300 mt-2 max-w-2xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer ornare sem in eros tincidunt aliquam. Vivamus
					sagittis elit leo.
				</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{[
						{
							title: "Responsive Design",
							desc: "It works in any screen size",
							icon: (
								<Sparkles className="size-5 text-fuchsia-400" />
							),
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
							icon: (
								<Sparkles className="size-5 text-fuchsia-400" />
							),
						},
					].map((feature) => (
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
		</div>
	);
}

export default App;
