import { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

function App() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(prev => prev + 1);
  };

  const products = [
    {
      name: "Samesung",
      image: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/877221/1.jpg?1419"
    },
    {
      name: "Telephones",
      image: "https://sn.jumia.is/cms/00-2025/FOLIES_ETE/TBN/SN_W28_THUMBNAILS_300x300_TEL.jpg"
    },
    {
      name: "Iphone 13 Pro max",
      image: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/591221/1.jpg?1684"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Boutique</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        {products.map((prod, index) => (
          <Product key={index} name={prod.name} image={prod.image} onAdd={handleAddToCart} />
        ))}
      </div>
      <Cart count={count} />
    </div>
  );
}

export default App;
