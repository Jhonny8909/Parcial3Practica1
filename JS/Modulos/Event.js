export function Event() {
    document.addEventListener("DOMContentLoaded", function () {
      const darkThemeButton = document.getElementById("dark-theme");
      const body = document.body;
  
      if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
      }
  
      darkThemeButton.addEventListener("click", function () {
        if (body.classList.contains("dark")) {
          body.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          body.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      });
    });
  }