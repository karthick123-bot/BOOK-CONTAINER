// Open popup
document.getElementById("add-popup-button").addEventListener("click", () => {
  document.getElementById("popup-overlay").style.display = "block";
  document.getElementById("popup-box").style.display = "block";
});

// Close popup
document.getElementById("cancel-popup").addEventListener("click", () => {
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("popup-box").style.display = "none";
  document.getElementById("book-form").reset();
});

// Handle form submission
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const title = document.getElementById("book-title-input").value.trim();
  const author = document.getElementById("book-author-input").value.trim();
  const desc = document.getElementById("short-description-input").value.trim();

  if (title && author && desc) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-container");

    bookCard.innerHTML = `
      <h2>${title}</h2>
      <h5>${author}</h5>
      <p>${desc}</p>
      <button class="delete-btn">Delete</button>
    `;

    document.getElementById("book-list").appendChild(bookCard);

    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup-box").style.display = "none";
    document.getElementById("book-form").reset();
  }
});

// Handle delete
document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
