function Product({ name, image, onAdd }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={image} alt={name} width="200" style={{ borderRadius: "10px" }} />
      <h3>{name}</h3>
      <button onClick={onAdd}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
