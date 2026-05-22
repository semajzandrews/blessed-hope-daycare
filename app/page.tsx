import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Programs from "./components/Programs";
import DayRhythm from "./components/DayRhythm";
import Care from "./components/Care";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Programs />
        <DayRhythm />
        <Care />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
