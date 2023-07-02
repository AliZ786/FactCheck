import React, { useState } from "react";
import "./../../style.css";
import supabase from "../../api/supabase";

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

function FactsList({ facts, setFacts }) {
  const factsCount = facts.length;

  return (
    <section>
      <div className="facts-header">
        <h2>Total Facts: {factsCount}</h2>
      </div>
      {factsCount === 0 ? (
        <p className="message">
          No facts exist for this category. Create a new one by clicking the
          Share a fact button. 😁
        </p>
      ) : (
        <ul className="facts-list">
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} setFacts={setFacts} />
          ))}
        </ul>
      )}
    </section>
  );
}

function Fact({ fact, setFacts }) {
  const category = CATEGORIES.find((cat) => cat.name === fact.category);
  const backgroundColor = category.color;
  const [isUpdating, setIsUpdating] = useState(false);
  const [votedButtons, setVotedButtons] = useState([]);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(columnName) {
    if (votedButtons.includes(columnName)) return; // Skip if already voted for the button
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);

    if (!error) {
      setVotedButtons((buttons) => [...buttons, columnName]); // Add the voted button to the list
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
    }
  }

  return (
    <li className="facts" key={fact.id}>
      <p>
        {isDisputed ? (
          <span className="disputed">[This info may be disputed]</span>
        ) : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          (Source)
        </a>
        <span className="category" style={{ backgroundColor: backgroundColor }}>
          {fact.category}
        </span>
      </p>

      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating || votedButtons.includes("votesInteresting")}
        >
          <strong>👍 {fact.votesInteresting}</strong>
        </button>
        <button
          onClick={() => handleVote("votesFalse")}
          disabled={isUpdating || votedButtons.includes("votesFalse")}
        >
          <strong>😡 {fact.votesFalse}</strong>
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating || votedButtons.includes("votesMindblowing")}
        >
          <strong>😮 {fact.votesMindblowing}</strong>
        </button>
      </div>
    </li>
  );
}

export default FactsList;
