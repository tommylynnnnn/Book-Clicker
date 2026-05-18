let books = 0;

const counter = document.getElementById("counter");
const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", () => {
  books += 1;
  counter.textContent = "Books: " + books;
});
