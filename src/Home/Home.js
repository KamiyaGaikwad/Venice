import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../Images/venice-logo.png";
import "./venice.css";

export default function Home() {
  useEffect(() => {
    document.title = "Venice | Home";
  }, []);
  return (
    <div className="grid-container">
      <nav className="nav">
        <div className="left">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="btn btn-link brand">
            Venice
          </Link>
        </div>
        <div className="right">
          <div className="input-group search">
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <div className="badge">
            <Link to="/wishlist">
              <i className="fas fa-heart" />
              <div className="badge-icon">0</div>
            </Link>
          </div>
          <div className="badge cart-icon">
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              <div className="badge-icon">0</div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="alert-container">
        Select your favourite color Theme and get all the Jackets you vibe with
        <span>😊</span>
      </div>
      <h2 className="brand center">Jackets</h2>
      <div className="themes">
        <Link to="/product" className="theme-color theme-red tdn">
          <div className="theme-text">Red</div>
        </Link>
        <Link to="/product" className="theme-color theme-orange tdn">
          <div className="theme-text">Orange</div>
        </Link>
        <Link to="/product" className="theme-color theme-yellow tdn">
          <div className="theme-text">Yellow</div>
        </Link>
        <Link to="/product" className="theme-color theme-green tdn">
          <div className="theme-text">Green</div>
        </Link>
        <Link to="/product" className="theme-color theme-blue tdn">
          <div className="theme-text">Blue</div>
        </Link>
        <Link to="/product" className="theme-color theme-indigo tdn">
          <div className="theme-text">Indigo</div>
        </Link>
        <Link to="/product" className="theme-color theme-violet tdn">
          <div className="theme-text">Violet</div>
        </Link>
      </div>
      <Link to="/product" className="tdn">
        <button className="btn btn-primary pink-big center">Shop Now!</button>
      </Link>
    </div>
  );
}
