function Cart({ count }) {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>🛒 Panier</h2>
      <p>Articles ajoutés : {count}</p>
    </div>
  );
}

export default Cart;
