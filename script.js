const noButton = document.getElementById("noButton");

if (noButton) {
  function moveNoButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    noButton.style.zIndex = "9999";
  }

  noButton.addEventListener("mouseenter", moveNoButton);

  noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
  });

  noButton.addEventListener("click", function(event) {
    event.preventDefault();
    moveNoButton();
  });
}

function goToLove() {
  window.location.href = "love.html";
}