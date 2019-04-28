// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api", function(data) {

  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "character-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);


    $("#character-well-" + i).append("<h2>" + data[i].name + "'s" + " picks:" + "</h2>");
    $("#character-well-" + i).append("Jon Snow: " + data[i].jonSnow + "<br>");
    $("#character-well-" + i).append("Daenerys Targaryen: " + data[i].daniT + "<br>");
    $("#character-well-" + i).append("Arya Stark: " + data[i].arya + "<br>");
    $("#character-well-" + i).append("Sansa Stark: " + data[i].sansa + "<br>");
    $("#character-well-" + i).append("Bran Stark: " + data[i].bran + "<br>");
    $("#character-well-" + i).append("Tyrion Lannister: " + data[i].tyrion + "<br>");
    $("#character-well-" + i).append("Varys: " + data[i].varys + "<br>");
    $("#character-well-" + i).append("Jorah Mormont: " + data[i].jorah + "<br>");
    $("#character-well-" + i).append("Jaime Lannister: " + data[i].jaime + "<br>");
    $("#character-well-" + i).append("Cersei Lannister: " + data[i].cersei + "<br>");
    $("#character-well-" + i).append("Samwell Tarly: " + data[i].samwell + "<br>");
    $("#character-well-" + i).append("Tormund Giantsbane: " + data[i].tormund + "<br>");
    $("#character-well-" + i).append("Brienne of Tarth: " + data[i].brienne + "<br>");
    $("#character-well-" + i).append("Grey Worm: " + data[i].greyworm + "<br>");
    $("#character-well-" + i).append("Missandei: " + data[i].missandei + "<br>");
    $("#character-well-" + i).append("Podrick Payne: " + data[i].podrick + "<br>");
    $("#character-well-" + i).append("Theon Greyjoy: " + data[i].theon + "<br>");
    $("#character-well-" + i).append("The Night King: " + data[i].nightking + "<br>" + "\n=============================\n");

  }
});
