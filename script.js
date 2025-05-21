
document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
