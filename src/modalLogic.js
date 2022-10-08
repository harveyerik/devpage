function modalLogic(open, close, section, buttonOne, buttonTwo){
    
    open.addEventListener("click", (e) => {
        e.preventDefault();
        section.classList.toggle("close-section-projects");
        buttonOne.style.bottom = "0";
        buttonTwo.style.bottom = "0";
    });

    close.addEventListener("click", (e) => {
        section.classList.toggle("close-section-projects");
        buttonOne.style.bottom = "-100vh";
        buttonTwo.style.bottom = "-100vh";
    });

}
export default modalLogic