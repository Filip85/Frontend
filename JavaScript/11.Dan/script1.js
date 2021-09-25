const getAttributes = () => {
    const link = document.querySelector("a");

    console.log(link.type, link.href, link.hreflang, link.target, link.rel);
}


const showContent = () => {
        let template = document.querySelector("template");
        let clon = template.content.cloneNode(true);
        document.body.appendChild(clon);
}