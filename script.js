let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add("active");
}

function moveNo() {
  const noBtn = document.querySelector(".no");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}
