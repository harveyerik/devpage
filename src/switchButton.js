function switchButton(projects, skills){
    document.addEventListener("click", toggleModal);
    function toggleModal(e) {
        if (e.target.className === "next-page-id-class__001") {
            projects.classList.toggle("is-activate");
            skills.classList.toggle("is-activate");
        }
    }
}
export default switchButton