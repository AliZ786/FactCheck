import "./App.css";
import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="100"
          width="100 "
          alt="Logo for the website"
        />
        <h1>Today I Learned!</h1>
      </div>
      <button className="btn share-btn btn-open">Share a fact</button>
    </header>
  );
}

export default App;
