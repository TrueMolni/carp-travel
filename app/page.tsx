import Header from "./components/Header";
import Carrer from "./components/Carrer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-text-500 h-screen">
        <section className="bg-text-500 h-screen" id="about"></section>
        <section className="bg-text-500 h-screen" id="services"></section>
        <section
          className="mm:bg-none bg-career-tm bg-center bg-contain"
          id="career"
        >
          <Carrer />
        </section>
        <section className="bg-text-500 h-screen" id="gallery"></section>
        <section className="bg-text-500 h-screen" id="contacts"></section>
      </main>
    </>
  );
}
