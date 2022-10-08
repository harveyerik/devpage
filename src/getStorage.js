function getStorage(app,button){
    document.addEventListener("DOMContentLoaded", (e) => {
        darkmodeStorage()
      });      
    function darkmodeStorage(){
        if (!localStorage.getItem("darkmode")) {
            return;
        } else {
            if (localStorage.getItem("darkmode") === "true") {
                app.classList.toggle("light");
                button.style.backgroundImage = `url("../assets/sun.svg")`;
                button.style.backgroundColor = `var(--white)`
            } else {
                button.style.backgroundImage = `url("../assets/moon.svg")`;
                button.style.backgroundColor = `var(--dark-med)`
            }
        }
    }
}
export default getStorage