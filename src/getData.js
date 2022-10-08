function getData(nameHtml,descriptionHtml,imgeHtml,linkPorHtml,gitHubHtml,twitterHtml,linkindHtml){
    let linkSocialHtml= document.createElement("a")
    async function getDataDo(){
        let url = "../data/data.json";
        try {
            let res = await fetch(url);
            let json = await res.json();
            console.log(json);
            let name = json[0].name
            let description = json[0].description
            let linkSocial = json[0].gmail
            let imagePort = json[0].img
            let linkPortfolio = json[1].portfolio
            let gitHub = json[2].github
            let twitter = json[2].twitter
            let linkind = json[2].likeind

            nameHtml.textContent= name
            descriptionHtml.textContent = description

            linkSocialHtml.setAttribute("href",`${linkSocial}`)
            linkSocialHtml.textContent="hacer click aquí."
            descriptionHtml.appendChild(linkSocialHtml)

            imgeHtml.style.backgroundImage = `url("${imagePort}")`
            linkPorHtml.setAttribute("href",`${linkPortfolio}`)

            gitHubHtml.setAttribute("href",`${gitHub}`)
            twitterHtml.setAttribute("href",`${twitter}`)
            linkindHtml.setAttribute("href",`${linkind}`)

            console.log(name,description,linkSocial,imagePort,linkPortfolio)
            console.log(gitHub,twitter,linkind)
        } catch (error) {
            nameHtml.textContent= "HARVEY YERIK"
            descriptionHtml.textContent = "Sucedió un error, Puede recargar la pagina o si no funciona puedes copiar el siguiente link. https://yerikah.github.io/briefcase/ "
            linkSocialHtml.setAttribute("href",`#`)
            linkSocialHtml.textContent="hacer click aquí."
            imgeHtml.style.backgroundImage = `url("../assets/logo-desktop-dark.svg")`
            linkPorHtml.setAttribute("href",`${linkPortfolio}`)
            gitHubHtml.setAttribute("href",`#`)
            twitterHtml.setAttribute("href",`#`)
            linkindHtml.setAttribute("href",`#`)
        }
    }
    getDataDo();
}
export default getData