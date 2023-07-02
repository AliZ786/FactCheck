import "../../style.css";
import React from "react";
import logo from "../../assets/png/logo-no-background.png";

export default function Header(props) {
  const { showForm, setShowForm } = props;

  return (
    <header className="header">
      <div className="logo">
        <img
          className="logo-image"
          src={logo}
          height="100"
          width="100"
          alt="Logo for the website"
        />
        <h1>Today I Learned!</h1>
      </div>
      <button
        className={`btn share-btn btn-open ${showForm ? "hover-close" : ""}`}
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}
