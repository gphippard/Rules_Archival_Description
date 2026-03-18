document.addEventListener("DOMContentLoaded", function () {
  const groups = document.querySelectorAll(".nav__list > li");

  groups.forEach(group => {
    const childList = group.querySelector("ul");

    if (childList) {
      const title = group.querySelector("a, span");

      // Start collapsed
      childList.style.display = "none";

      title.style.cursor = "pointer";

      title.addEventListener("click", function (e) {
        e.preventDefault();

        const isOpen = childList.style.display === "block";
        childList.style.display = isOpen ? "none" : "block";
      });
    }
  });
});
