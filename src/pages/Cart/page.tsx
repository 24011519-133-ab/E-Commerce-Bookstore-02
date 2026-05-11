const Cart = () => (
  <div className="cart-page">
    <h1>Shopping Cart</h1>
    <p className="cart-subtitle">Manage your items</p>

    <div className="cart-table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart-item">
            <td>
              <div className="cart-product">
                <img src="/images/1984.jpeg" alt="1984" className="cart-img" />
                <div className="cart-info">
                  <h4>1984</h4>
                  <p>George Orwell</p>
                </div>
              </div>
            </td>
            <td className="cart-price">$12.99</td>
            <td>
              <input type="number" className="cart-qty" defaultValue="1" min="1" />
            </td>
            <td className="cart-total">$12.99</td>
            <td>
              <button className="cart-remove" type="button">
                ✕
              </button>
            </td>
          </tr>
          <tr className="cart-item">
            <td>
              <div className="cart-product">
                <img src="/images/alchemist.jpeg" alt="The Alchemist" className="cart-img" />
                <div className="cart-info">
                  <h4>The Alchemist</h4>
                  <p>Paulo Coelho</p>
                </div>
              </div>
            </td>
            <td className="cart-price">$14.99</td>
            <td>
              <input type="number" className="cart-qty" defaultValue="1" min="1" />
            </td>
            <td className="cart-total">$14.99</td>
            <td>
              <button className="cart-remove" type="button">
                ✕
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cart-bottom">
      <div className="cart-coupon">
        <input type="text" className="coupon-input" placeholder="Coupon code" />
        <button className="coupon-btn btn" type="button">
          Apply
        </button>
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>$27.98</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>$27.98</span>
        </div>
        <button className="checkout-btn btn" type="button">
          Proceed to Checkout
        </button>
        <a href="/" className="continue-link">
          Continue Shopping
        </a>
      </div>
    </div>
  </div>
);

export default Cart;
