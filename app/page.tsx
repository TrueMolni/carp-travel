import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-text-500 h-screen">
        <section className="bg-text-500 h-screen" id="about"></section>
        <section className="bg-text-500 h-screen" id="services"></section>
        <section className="bg-text-500 h-screen" id="career"></section>
        <section className="bg-text-500 h-screen" id="gallery"></section>
        <section className="bg-text-500 h-screen" id="contacts"></section>
      </main>
    </>
  );
}
