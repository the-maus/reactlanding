import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

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
			<Testimonials />

			{/* Pricing */}
			<Pricing />
		</div>
	);
}

export default App;
