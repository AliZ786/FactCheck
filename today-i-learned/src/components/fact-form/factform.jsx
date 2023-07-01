import "./../../style.css";

export default function NewFactForm() {
  return (
    <form className="fact-form">
      <input type="text" placeholder="Share a fact with the world" />
      <input type="text" placeholder="Share a source" />

      <select name="" id="">
        <option value="">Choose a Category</option>
        <option value="entertainment">Entertainment</option>
        <option value="finance">Finance</option>
        <option value="health">Health</option>
        <option value="history">History</option>
        <option value="news">News</option>
        <option value="science">Science</option>
        <option value="society">Society</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <button className="btn post-btn"></button>
    </form>
  );
}
