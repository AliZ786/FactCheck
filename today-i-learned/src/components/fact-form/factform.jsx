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

function NewFactForm({ setFacts }) {
  const sortedCategories = CATEGORIES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && isValidHttpUrl(source) && category) {
      const newFact = { text, source, category };

      try {
        const { data, error } = await supabase
          .from("facts")
          .insert([newFact])
          .select();

        if (error) {
          throw error;
        }

        // Update the local facts list with the new fact
        setFacts((facts) => [data[0], ...facts]);

        setText("");
        setCategory("");
        setSource("");
      } catch (error) {
        console.error("Error creating fact:", error.message);
      }
    }
  }

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Share a source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose a Category</option>
        {sortedCategories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="btn post-btn" type="submit"></button>
    </form>
  );
}

export default NewFactForm;
