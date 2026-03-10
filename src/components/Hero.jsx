import { ArrowRight, Shield, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const features = ["Speed", "Security", "Conversion"];
	return (
		<>
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
						{features.map((label, i) => (
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
		</>
	);
};

export default Hero;
