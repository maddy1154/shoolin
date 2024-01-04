import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1694632270142-46c18ea2b1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMHxpVUlzblZ0akIwWXx8ZW58MHx8fHx8"
        title="Enrich Your Wealth"
        text="Shoolin Analytica is an firm that employs mathematical and statistical methods in the design and execution of its investment programs"
        btnClass="show"
        buttonText="Explore"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
