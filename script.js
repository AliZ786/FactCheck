const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const shareBtn = document.querySelector(".share-btn");
const postBtn = document.querySelector(".post-btn");

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
