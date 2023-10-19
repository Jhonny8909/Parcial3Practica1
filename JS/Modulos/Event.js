export function Event() {
    document.addEventListener("click", function () {
      const darkThemeButton = document.getElementById("dark-theme");
      const body = document.body;
  
      if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
      }
  
      darkThemeButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
        } else {
          body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
        }
      });
    });
  }