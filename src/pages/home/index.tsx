import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HowItWorks from "./components/HowItWorks";
import { ReactLenis } from "@studio-freight/react-lenis";

function Home() {
  return (
    <ReactLenis
      root
      options={{
        duration: 2.3,
      }}
    >
      <div className="home-page no-scroll">
        <Preloader />
        <Hero />
        <HowItWorks />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Home;
