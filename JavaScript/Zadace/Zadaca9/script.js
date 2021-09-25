const getArticles = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}

getArticles('http://as-var-croapps.ecx.local:1337/blizzard-2008-s')