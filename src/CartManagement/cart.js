import { useEffect } from "react";
import logo from "../Images/venice-logo.png";
import "./cart.css";

export default function Cart() {
  useEffect(() => {
    document.title = "Venice | Cart";
  }, []);
  return (
    <>
      <div className="flex-container flex-columns">
        <nav className="nav">
          <div className="left">
            <a href="https://venice-app.netlify.app/" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <a
              href="https://venice-app.netlify.app/"
              className="btn btn-link brand"
            >
              Venice
            </a>
          </div>
          <div className="right">
            <div className="input-group search">
              <input type="text" placeholder="Search" />
            </div>
            <a href="https://venice-app.netlify.app/Authentication/login.html">
              <button className="btn btn-primary">Login</button>
            </a>
            <div className="badge">
              <a href="https://venice-app.netlify.app/wishManagement/wish.html">
                <i className="fas fa-heart" />
                <div className="badge-icon">0</div>
              </a>
            </div>
            <div className="badge cart-icon">
              <a href="https://venice-app.netlify.app/CartManagement/cart.html">
                <i className="fas fa-shopping-cart" />
                <div className="badge-icon">0</div>
              </a>
            </div>
          </div>
        </nav>
        <div className="flex-container">
          <main className="ml mt flex-container flex-columns flex-center">
            <h2 className="brand">
              My Cart<span className="text-small">(2)</span>
            </h2>
            <div id="card-container" className="mt flex-rows">
              <div className="card card-basic card-shadow">
                <img
                  src="https://picsum.photos/id/1005/340/196"
                  className="card-img-top"
                  alt="jacket"
                />
              </div>
              <div className="card card-basic card-text-only landscape">
                <img
                  src="/Images/card-image.jpg"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h3 className="card-text mb">Red Jacket</h3>
                  <div className="card-title mb">
                    ₹150 <span className="cut-off">₹300</span>
                  </div>
                  <div className="card-subtitle mb">50% off</div>
                  <div className="card-text mb text-big">
                    Quantity{" "}
                    <button className="btn btn-success-outline more">-</button>
                    <span className="text-big"> 2 </span>
                    <button className="btn btn-success-outline">+</button>
                  </div>
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="cart-add card-btn-1 mb">
                      Remove from Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Move to Wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="card card-basic card-text-only">
                <img
                  src="/Images/card-image.jpg"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h3 className="card-title mb">Price Details</h3>
                  <hr className="mb" />
                  <div className="card-text mb">
                    Price (2 items)<span className="end">₹600</span>
                  </div>
                  <div className="card-text mb">
                    Discount<span className="end">-₹300</span>
                  </div>
                  <div className="card-text mb">
                    Delivery Charges<span className="end">₹100</span>
                  </div>
                  <hr className="mb" />
                  <h5 className="card-subtitle">
                    TOTAL AMOUNT<span className="end">₹300</span>
                  </h5>
                  <hr className="mb" />
                  <div className="card-text">
                    You will save ₹300 on this order
                  </div>
                  <div className="card-actions">
                    <a href="#" className="card-btn-1 pink mb cart-normal">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
