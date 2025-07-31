import React from "react";
import Sudents from "./Sudents";
import Card from "./Card";
import CartContext from "./CartContext";

function App() {
  return (
    <CartContext>
      <div> 
        <div className="products">
          <Sudents 
            image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/877221/1.jpg?1419" 
            article="Samesung" />
          <Sudents 
            image="https://sn.jumia.is/cms/00-2025/FOLIES_ETE/TBN/SN_W28_THUMBNAILS_300x300_TEL.jpg" 
            article="Telephones" />
          <Sudents 
            image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/591221/1.jpg?1684" 
            article="Iphone 13 Pro max" />
        </div>

        <div className="products">
          <Sudents 
            image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/608221/1.jpg?3634" 
            article="Tablette" />
          <Sudents 
            image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/319621/1.jpg?6656" 
            article="Ipad" />
          <Sudents 
            image="https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/905321/1.jpg?7450" 
            article="Mac book" />
        </div>

        <Card />
      </div>
    </CartContext>
  );
}

export default App;
