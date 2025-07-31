import Sudents from "./Sudents";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="products">
        <Sudents
          image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/877221/1.jpg?1419"
          article="Samsung"
        />
        <Sudents
          image="https://sn.jumia.is/cms/00-2025/FOLIES_ETE/TBN/SN_W28_THUMBNAILS_300x300_TEL.jpg"
          article="Téléphones"
        />
        <Sudents
          image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/591221/1.jpg?1684"
          article="iPhone 13 Pro Max"
        />
      </div>
      <Card />
    </>
  );
}

export default App;
