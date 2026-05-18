let books = 0;
let booksPerClick = 1;

const counter = document.getElementById("counter");
const bookBtn = document.getElementById("bookBtn");

const buyLibrarian = document.getElementById("buyLibrarian");
const upgradeInfo = document.getElementById("upgradeInfo");

// 📖 clicking book
bookBtn.addEventListener("click", () => {
  books += booksPerClick;
  updateUI();
});

// 🛒 buy upgrade
buyLibrarian.addEventListener("click", () => {
  if (books >= 10) {
    books -= 10;
    booksPerClick += 1;

    buyLibrarian.disabled = true;
    buyLibrarian.textContent = "✔ Librarian Owned";
  } else {
    upgradeInfo.textContent = "Not enough books!";
    setTimeout(() => upgradeInfo.textContent = "", 1000);
  }

  updateUI();
});

function updateUI() {
  counter.textContent = "Books: " + books;
}
