function darkmode(main, button) {
    button.addEventListener("click",funTogg)

    function funTogg(){
        if (main.className === "dark light") {
            button.style.backgroundImage = `url("../assets/moon.svg")`;
            button.style.backgroundColor = `var(--dark-med)`
            main.classList.toggle("light");
            localStorage.setItem("darkmode", "false");
            console.log("off");
        } else {
            button.style.backgroundImage = `url("../assets/sun.svg")`;
            button.style.backgroundColor = `var(--white)`
            main.classList.toggle("light");
            localStorage.setItem("darkmode", "true");
            console.log("on");
        }
    }
  }
export default darkmode