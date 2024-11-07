window.onload = function () {
  document.body.classList.add("fade-in");
};

function navigateToLogin() {
  document.body.classList.remove("fade-in");
  document.body.classList.add("fade-out");

  setTimeout(function () {
    window.location.href = "./index.html";
  }, 500);
}
