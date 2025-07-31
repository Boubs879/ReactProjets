import React from "react";
import PropTypes from "prop-types";
import useCartStore from "./store";

function Sudents({ image, article }) {
  const increment = useCartStore((state) => state.increment);

  return (
    <div className="Products">
      <img className = "" src={image} alt={article} />
      <p>{article}</p>
      <button onClick={increment}>Commander</button>
    </div>
  );
}

Sudents.propTypes = {
  article: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Sudents;
