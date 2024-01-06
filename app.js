const toggleBtn = document.querySelector("#toggle-nav");
const navItemContainer = document.querySelector(".nav-item-container");

toggleBtn.addEventListener("click", () => {
  navItemContainer.classList.toggle("show-links");
  console.log(navItemContainer.classList);
});
