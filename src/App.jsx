import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";



function App() {
	return (
		<div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
			{/* NavBar */}
			<Header />

			{/* Hero */}
			<Hero />

			{/* Features */}
			<Features />

			{/* Testimonials */}
			<section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
				
			</section>
		</div>
	);
}

export default App;
