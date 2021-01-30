//variable for search term input searchTerm by id#searchTerm
let searchTerm = $("#searchTerm")
// //variable for numberArticles dropdown box by id
// let numberArticles = $("#numberArticles option:selected" ).text()
//variable for startYear from id #startYear
let startYear = $("#startYear")
//variable for endYear from id #endYear 
let endYear = $("#endYear")
//variable for searchButton from id#searchButton 
let searchButton = $("#searchButton")
//variable for clearButton from id #clearButton
let clearButton = $("#clearButton")
//variable for displayArea from id#displayArea 
let displayArea = $("#displayArea")



//click functions - id - Search 
searchButton.on("click", function() {
    let search = searchTerm.val()
    console.log(search)
    apiKey = "HAMdnP7EUZJcwGi8sZEMK4wnKQuLPfV8"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey + "&begin_date="+ startYear.val() + "0101&end_date=" + endYear.val() + "0101"
    
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    
        for (let i=0; i < $("#numberArticles option:selected" ).text(); i++) {
            let article = $("<div>")
            article.attr("class", "row border")

            let headline = $("<div>")
            headline.attr("class", "row")
            headline.append(response.response.docs[i].headline.main);
            article.append(headline)

            let byline = $("<div>")
            byline.attr("class", "row")
            byline.append(response.response.docs[i].byline.original)
            article.append(byline)

            let abstract = $("<div>")
            abstract.attr("class", "row")
            abstract.append(response.response.docs[i].abstract)
            article.append(abstract)


            let link = $("<a>Read the Article</a>")
            link.attr("class", "row")
            link.attr("href", response.response.docs[i].web_url)
            link.attr("target", "_blank")
            article.append(link)

            displayArea.append(article)
        }

    })
})
