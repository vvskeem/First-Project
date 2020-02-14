$("#newMusic").on("click", function(event) {
  let spotifySearch = $(event.target).attr("name");
  console.log(spotifySearch);

  let spotifyApi = "https://spotifykeem.herokuapp.com/" + spotifySearch;
  console.log(spotifyApi);

  $.get(spotifyApi, function(response) {
    $("#music").empty();
    for (let index = 0; index < response.length; index++) {
      const element = response[index];
      let { name, popularity, preview_url, image } = element;

      let card = $("<div>").attr({
        class: "musicCard"
      });

      let cardPoster = $("<img>").attr({
        src: image,
        class: "card-img-top"
      });
      let audioSrc = $("<audio controls>").attr({
        src: preview_url,
        type: "audio/mp3"
      });

      let cardBody = $("<div>").attr("class", "card-body");
      let cardYear = $("<p>")
        .attr("class", "card-text")
        .html(popularity);
      let cardTitle = $("<h5>").html(name);

      cardBody
        .append(cardTitle)
        .append(cardYear)
        .append(audioSrc);

      card.append(cardPoster).append(cardBody);

      $("#music").append(card);
    }
  });
});
