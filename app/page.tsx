import Header from "./components/Header";
import Carrer from "./components/Carrer";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-text-500">
        <section
          className="mm:bg-hero-mm tablet:bg-hero-tm desk:bg-hero-dm mm:px-[20px] mm:pt-[181px] mm:pb-[56px] 
        tablet:px-[32px] tablet:pb-[64px] tablet:pt-[120px] bg-center bg-cover
        desk:px-[80px] pb-[80px] pt-[106px]"
        >
          <Hero />
        </section>
        <section className="bg-text-500" id="about"></section>
        <section className="bg-text-500" id="services"></section>
        <section
          className="mm:block flex flex-col items-center tablet:bg-career-tm desk:bg-career-tm mm:bg-none bg-center mm:px-[0px] mm:py-[0px] px-[32px] py-[64px] desk:p-[80px]"
          id="career"
        >
          <Carrer />
        </section>
        <section
          className="bg-text-500 bg-gallery-mm mm:px-[20px] mm:py-[56px] tablet:px-[32px] tablet:py-[64px]
          desk:px-[80px] desk:py-[80px]"
          id="gallery"
        >
          <Gallery />
        </section>
        <section className="bg-text-500" id="contacts"></section>
      </main>
    </>
  );
}
