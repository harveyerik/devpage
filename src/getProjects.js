function getProjects(father){
    const $fragment = document.createDocumentFragment()
    async function getProjectsDo(){
        let url = "../data/projects.json"
        try {
            let res = await fetch(url)
            let json = await res.json()
            json.forEach(item => {
                const myDiv = document.createElement("div")
                const other = document.createElement("div")
                const boxOther = document.createElement("div")
                const myh4 = document.createElement("h4")
                const myP = document.createElement("p")
                const aLink = document.createElement("a")
                myDiv.className = "section-projects-center-contente__projects_box"
                other.className = "section-projects-center-contente__projects_box__img_one"
                aLink.className ="section-projects-center-contente__projects_box__img_one__hoverLink"
                aLink.textContent="ver app"
                other.style.backgroundImage = `url("${item.img}")`
                myh4.textContent= item.title
                myP.textContent= item.description
                aLink.setAttribute("href",`${item.link}`)
                aLink.setAttribute("target",`_blank`)
                myDiv.appendChild(other)
                boxOther.appendChild(myh4)
                boxOther.appendChild(myP)
                myDiv.appendChild(boxOther)
                myDiv.appendChild(aLink)
                $fragment.appendChild(myDiv)

            });
            father.appendChild($fragment)
        } catch (error) {
            console.log(error)
        }
    }
    getProjectsDo()
}
export default getProjects