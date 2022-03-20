import { useEffect } from "react";
import logo from "../Images/venice-logo.png";
import "./product.css";

export default function ProductList() {
  useEffect(() => {
    document.title = "Venice | ProductList";
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
            <a href="https://venice-app.netlify.app/Authentication/logout.html">
              <button className="btn btn-primary">LogOut</button>
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
          <nav className="flex-container flex-columns nav-vertical">
            <div className="flex-container flex-rows pb">
              <h2 className="pb">Filters</h2>
              <button className="btn btn-link">Clear</button>
            </div>
            <div className="flex-container flex-columns pb">
              <h3 className="pb">Price</h3>
              <div className="slidecontainer mb">
                <pre>
                  50{"      "}100{"      "}150
                </pre>
                <input
                  type="range"
                  min="{50}"
                  max="{150}"
                  defaultValue="{100}"
                  className="mb"
                />
              </div>
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Color Theme</h3>
                <div className="radio-container flex-container flex-columns pb mb">
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="red"
                      name="radio-btn"
                    />
                    <label htmlFor="red">Red</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="orange"
                      name="radio-btn"
                      defaultChecked
                    />
                    <label htmlFor="orange">Orange</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="yellow"
                      name="radio-btn"
                    />
                    <label htmlFor="yellow">Yellow</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="green"
                      name="radio-btn"
                    />
                    <label htmlFor="green">Green</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="blue"
                      name="radio-btn"
                    />
                    <label htmlFor="blue">Blue</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="indigo"
                      name="radio-btn"
                    />
                    <label htmlFor="indigo">Indigo</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="checkbox"
                      className="radio"
                      id="violet"
                      name="radio-btn"
                    />
                    <label htmlFor="violet">Violet</label>
                  </div>
                </div>
              </div>
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Rating</h3>
                <div className="radio-container  flex-container flex-columns pb mb">
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="4+"
                      name="radio-btn"
                    />
                    <label htmlFor="4+">4 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="3+"
                      name="radio-btn"
                      defaultChecked
                    />
                    <label htmlFor="3+">3 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="2+"
                      name="radio-btn"
                    />
                    <label htmlFor="2+">2 stars and above</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="1+"
                      name="radio-btn"
                    />
                    <label htmlFor="1+">1 stars and above</label>
                  </div>
                </div>
              </div>
              <div className="flex-container flex-columns pb">
                <h3 className="pb">Sort By</h3>
                <div className="radio-container flex-container flex-columns pb mb">
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="lth"
                      name="radio-btn"
                    />
                    <label htmlFor="lth">Price-Low to High</label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio"
                      id="htl"
                      name="radio-btn"
                      defaultChecked
                    />
                    <label htmlFor="htl">Price-High to Low</label>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="ml mt flex-container flex-columns">
            <h2 className="brand">
              Showing All products
              <span className="text-small">(Showing 7 products)</span>
            </h2>
            <div id="card-container" className="mt flex-columns">
              <div className="card card-basic card-shadow">
                <img
                  src="https://picsum.photos/id/1005/340/196"
                  className="card-img-top"
                  alt="jacket"
                />
                <div className="card-body">
                  <h5 className="card-subtitle">Red Jacket</h5>
                  <h3 className="card-title">₹150</h3>
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
                  <h5 className="card-subtitle">Blue Jacket</h5>
                  <h3 className="card-title">₹150</h3>
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="cart-add card-btn-1 mb">
                      Go to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1  cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-add ">
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
                  <h5 className="card-subtitle">Yellow Jacket</h5>
                  <h3 className="card-title">₹50</h3>
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
                  <h5 className="card-subtitle">Indigo Jacket</h5>
                  <h3 className="card-title">₹150</h3>
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
                  <h5 className="card-subtitle">Violet Jacket</h5>
                  <h3 className="card-title">₹100</h3>
                  <div className="card-text" />
                  <div className="card-actions flex-container flex-columns">
                    <a href="#" className="card-btn-1 cart-normal mb">
                      Add to Cart
                    </a>
                    <a href="#" className="card-btn-2 wish-normal">
                      Add to Wishlist
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
