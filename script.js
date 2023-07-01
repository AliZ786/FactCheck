const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const shareBtn = document.querySelector(".share-btn");
const postBtn = document.querySelector(".post-btn");
const factsList = document.querySelector(".facts-list");

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

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 42,
//     votesFalse: 22,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },

//   {
//     id: 4,
//     text: "Social media has become an integral part of modern Society, with over 3.8 billion active users worldwide.",
//     source: "https://just10facts.com/10-facts-about-society",
//     category: "society",
//     votesInteresting: 24,
//     votesMindblowing: 4,
//     votesFalse: 9,
//     createdIn: 2023,
//   },
// ];

factsList.innerHTML = "";

async function loadFacts() {
  //Load data from Supabase
  const res = await fetch(
    "https://ynbgoxevxsgjmflxwldw.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmdveGV2eHNnam1mbHh3bGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMTQ2NjEsImV4cCI6MjAwMzY5MDY2MX0.C5zqxChDkW6-9HjFk4L3GsAogbIYnUGUgg-Bv_AEDdk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmdveGV2eHNnam1mbHh3bGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMTQ2NjEsImV4cCI6MjAwMzY5MDY2MX0.C5zqxChDkW6-9HjFk4L3GsAogbIYnUGUgg-Bv_AEDdk",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

loadFacts();
// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="facts">
   <p>
                ${fact.text}
                <a
                  class="source"
                  href=${fact.source}
                  target="_blank"
                  >(Source)</a
                >
                <span class="category" style="background-color: ${
                  CATEGORIES.find((cat) => cat.name === fact.category).color
                }
                  ">${fact.category}</span
                >
              </p>
  
  
  </li>`
  );

  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
    shareBtn.classList.add("close"); // Add "close" class to show the icon
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
    shareBtn.classList.remove("close"); // Remove "close" class to hide the icon
  }
});

shareBtn.addEventListener("mouseover", function () {
  if (btn.textContent === "Close") {
    shareBtn.classList.add("hover-close"); // Add "hover-close" class when hovering over the close button
  }
});

shareBtn.addEventListener("mouseout", function () {
  shareBtn.classList.remove("hover-close"); // Remove "hover-close" class when moving the mouse away from the button
});

postBtn.addEventListener("mouseover", function () {
  postBtn.classList.add("hover"); // Add "hover" class when hovering over the post button
  postBtn.textContent = "";
});

postBtn.addEventListener("mouseout", function () {
  postBtn.classList.remove("hover"); // Remove "hover" class when moving the mouse away from the button
  postBtn.textContent = "post";
});
