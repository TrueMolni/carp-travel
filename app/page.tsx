import Header from "./components/Header";
import Form from "./components/shared/Form/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-text-500 h-screen px-[20px]">
        <section className="bg-text-500 h-screen" id="about"></section>
        <section className="bg-text-500 h-screen" id="services"></section>
        <section className="bg-text-500 h-screen" id="career">
          <Form />
        </section>
        <section className="bg-text-500 h-screen" id="gallery"></section>
        <section className="bg-text-500 h-screen" id="contacts"></section>
      </main>
    </>
  );
}
