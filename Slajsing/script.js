let articles = [];
let publishedDate = new Date();

const getArticles = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => createArticles(data))
}

const createArticles = (data) => {
    let formatedArticles = getFormatedArticles(data)

    const source = document.querySelector('#articlesTemplate').innerHTML;
    const sidebar = document.querySelector('.sidebar');

    const template = Handlebars.compile(source);
    const output = template({ articles: formatedArticles });

    sidebar.innerHTML = output;
}

const getFormatedArticles = (data) => {
    data.forEach((article, i) => {
        let currentDate = new Date(data[i].published);
        let currentDateMil = currentDate.getTime();
        let publishedDateMil = publishedDate.getTime()
        let time = (publishedDateMil - currentDateMil) / 3600000;
        
        articles.push({
            "articleUrl": article.articleUrl,
            "imageUrl": article.imageUrl,
            "subline": article.subline,
            "headline": article.headline,
            "published": Math.floor(time)
        })

        articles.sort(function(a, b) {
            if (a.published < b.published) {
                return -1;
              }
              if (a.published > b.published) {
                return 1;
              }
              return 0
        })
    });

    return articles
}

getArticles('http://as-var-croapps.ecx.local:1337/blizzard-2008-s')

