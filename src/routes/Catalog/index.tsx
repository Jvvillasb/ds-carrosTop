import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCar from "../../components/SectionCar";
import SectionComment from "../../components/SectionComment";
import "./styles.css";


export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <div className="dct-section-card-title">
          <h2>Venha nos visitar</h2>
        </div>
        <div className="dct-container">
          <SectionCar />
          <SectionCar />
        </div>
        <div className="dct-container-comments">
          <div className="dct-section-card-title">
            <h2>O que estão dizendo</h2>
          </div>
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
        </div>
      </main>
      <Footer />
    </>
  );
}
