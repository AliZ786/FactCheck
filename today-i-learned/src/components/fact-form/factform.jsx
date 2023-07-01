import "./../../style.css";

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

export default function NewFactForm() {
  const sortedCategories = CATEGORIES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <form className="fact-form">
      <input type="text" placeholder="Share a fact with the world" />
      <input type="text" placeholder="Share a source" />

      <select name="" id="">
        <option value="">Choose a Category</option>
        {sortedCategories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="btn post-btn"></button>
    </form>
  );
}
