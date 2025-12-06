import React, { useState } from 'react';
import "../../../css/ShoppingCart.css";

interface CartItem {
  id: number;
  name: string;
  model: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: 'Apple iPad Mini', model: 'G2356', price: 2.99, quantity: 1 },
  { id: 2, name: 'Smartphone XYZ', model: 'S9871', price: 150.50, quantity: 1 },
  { id: 3, name: 'Wireless Mouse', model: 'M5432', price: 25.00, quantity: 2 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = 3.00;
  const total = subtotal + shippingCost;

  return (
    <div className="cart-page-wrapper container-fluid py-5">
      <div className="container py-5">

        {/* Cart Items */}
        <div className="cart-items-box">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row rounded mb-4 p-4">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <h5 className="product-name mb-1">{item.name}</h5>
                  <p className="mb-0 product-model">Model : {item.model}</p>
                </div>
                <div>
                  <p className="product-price mb-0">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-quantity" style={{ width: '120px' }}>
                  <div className="input-group">
                    <button 
                      className="btn btn-sm btn-minus rounded-circle"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value={item.quantity}
                      readOnly
                    />
                    <button 
                      className="btn btn-sm btn-plus rounded-circle"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="mb-0 fw-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div>
                  <button 
                    className="btn btn-md rounded-circle btn-remove-item"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <i className="fa fa-times text-danger"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="mt-5">
          <input type="text" className="coupon-input me-5 py-3 mb-4" placeholder="Coupon Code" />
          <button className="btn-gaming-style" type="button">Apply Coupon</button>
        </div>

        {/* Cart Total Section */}
        <div className="row g-4 justify-content-end">
          <div className="col-8"></div>
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="cart-total-box rounded">
              <div className="p-4">
                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">${subtotal.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <div>
                    <p className="mb-0">Flat rate: ${shippingCost.toFixed(2)}</p>
                  </div>
                </div>
                <p className="mb-0 text-end">Shipping to Ukraine.</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">${total.toFixed(2)}</p>
              </div>
              <button className="btn-gaming-style mb-4 ms-4" type="button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShoppingCart;
