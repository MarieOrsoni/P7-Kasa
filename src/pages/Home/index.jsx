import Banner from "../../components/Banner";
import imagesource1 from "../../assets/imagesource1.png";
import PortfolioGallery from "../../components/Portfolio";

function Home() {
  return (
    <main>
      <Banner imageSrc={imagesource1} altText="paysage cotier">
        <p>Chez vous, partout et ailleurs</p>
      </Banner>
      <PortfolioGallery />
    </main>
  );
}
export default Home;
