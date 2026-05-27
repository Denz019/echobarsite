const imageLinks = document.querySelectorAll(".image_link a");

imageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = link.getAttribute("href");
  });
});
