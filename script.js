let currentPage = 1;
const totalPages = 5;

function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}

function prevPage() {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}

function moveNo() {
  const noBtn = document.querySelector(".no");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
}
