import "./App.css";
import "./style.css";
import FactsList from "./components/facts-list/factslist";
import NewFactForm from "./components/fact-form/factform";
import CategoriesDisplay from "./components/categories/categories";

const CATEGORIES = [
  { name: "technology", color: "#1e1b4b" },
  { name: "science", color: "#9f1239" },
  { name: "finance", color: "#fb923c" },
  { name: "society", color: "#3f6212" },
  { name: "entertainment", color: "#0c4a6e" },
  { name: "health", color: "#6b21a8" },
  { name: "history", color: "#2563eb" },
  { name: "news", color: "#450a0a" },
  { name: "sports", color: "#075985" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 42,
    votesFalse: 22,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },

  {
    id: 4,
    text: "Social media has become an integral part of modern Society, with over 3.8 billion active users worldwide.",
    source: "https://just10facts.com/10-facts-about-society",
    category: "society",
    votesInteresting: 24,
    votesMindblowing: 4,
    votesFalse: 9,
    createdIn: 2023,
  },
];

function App() {
  return (
    <>
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

      <NewFactForm />
      <main className="main">
        <CategoriesDisplay />
        <FactsList />
      </main>
    </>
  );
}

export default App;
