// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
// $("#add-btn").on("click", function(event) {
  // event.preventDefault();
// function postCharacter() {
  $("#add-btn").on("click", function(event) {
  event.preventDefault();
  // make a newCharacter obj
  var formArr = {
    name: $("#name").val(),
    jonSnow: $("#char1").val(),
    daniT: $("#char2").val(),
    arya: $("#char3").val(),
    sansa: $("#char4").val(),
    bran: $("#char5").val(),
    tyrion: $("#char6").val(),
    varys: $("#char7").val(),
    jorah: $("#char8").val(),
    jaime: $("#char9").val(),
    cersei: $("#char10").val(),
    samwell: $("#char11").val(),
    tormund: $("#char12").val(),
    brienne: $("#char13").val(),
    greyworm: $("#char14").val(),
    missandei: $("#char15").val(),
    podrick: $("#char16").val(),
    theon: $("#char17").val(),
    nightking: $("#char18").val(),
    melisandre: $("#char19").val()
  };

  console.log(formArr);

  // // send an AJAX POST-request with jQuery
  $.post("/api/new", formArr)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);

      // $('#exampleModalLong').modal('show');

  
    });


    $("#name").val("");
    $("#char1").val("");
    $("#char2").val("");
    $("#char3").val(""),
    $("#char4").val(""),
    $("#char5").val(""),
    $("#char6").val(""),
    $("#char7").val(""),
    $("#char8").val(""),
    $("#char9").val(""),
    $("#char10").val(""),
    $("#char11").val(""),
    $("#char12").val(""),
    $("#char13").val(""),
    $("#char14").val(""),
    $("#char15").val(""),
    $("#char16").val(""),
    $("#char17").val(""),
    $("#char18").val("");
    $("#char19").val("");


  
  // $.get("/all", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/all.html"));
  // })

  });



// });
// CAN'T GET F**** G**** D*** VALIDATION TO WORK!!!
