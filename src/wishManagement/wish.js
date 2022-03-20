import { useEffect } from "react";
import logo from "../Images/venice-logo.png";
import "./wish.css";

export default function WishList() {
  useEffect(() => {
    document.title = "Venice | WishList";
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
              My WishList
              <span className="text-small">(Showing 3 products)</span>
            </h2>
            <div id="card-container" className="mt flex-columns">
              <div className="card card-basic card-shadow">
                <img
                  src="https://picsum.photos/id/1005/340/196"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h5 className="card-subtitle">Blue Jacket</h5>
                  <h3 className="card-title">₹150</h3>
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 mb cart-normal">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-add">
                      Remove from Wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="card card-basic card-shadow">
                <img
                  src="https://picsum.photos/id/1005/340/196"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h5 className="card-subtitle">Green Jacket</h5>
                  <h3 className="card-title">₹100</h3>
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 mb cart-normal">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-add">
                      Remove from Wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="card card-basic card-shadow">
                <img
                  src="https://picsum.photos/id/1005/340/196"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h5 className="card-subtitle">Orange Jacket</h5>
                  <h3 className="card-title">₹100</h3>
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 mb cart-normal">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-add">
                      Remove from Wishlist
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
