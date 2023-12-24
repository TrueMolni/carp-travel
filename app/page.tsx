import Header from "./components/Header";
import Carrer from "./components/Carrer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-text-500 h-screen px-[20px]">
        <section className="bg-text-500 h-screen" id="about"></section>
        <section className="bg-text-500 h-screen" id="services"></section>
        <section className="bg-text-500 h-screen" id="career">
          <Carrer />
        </section>
        <section className="bg-text-500 h-screen" id="gallery"></section>
        <section className="bg-text-500 h-screen" id="contacts"></section>
      </main>
    </>
  );
}
