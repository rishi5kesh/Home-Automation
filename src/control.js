var room1State = "";
var updata = {
  "sw1": "",
  "sw2": "",
  "sw3": "",
};

var flag = "0";

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}

$(document).ready(function () {


  $.ajax({
    url: 'room1.php',                  //the script to call to get data          
    data: "",                        //you can insert url argumnets here to pass to api.php for example "id=5&parent=6"
    dataType: 'json',                //data format      
    success: function (data)          //on recieve of reply
    {
      room1State = data;

    }
  });
  setTimeout(
    function () {
      readState();
    }, 100);

  flag = "1";
  setTimeout(
    function () {
      senseState();
    }, 100);

});

function senseState() {


  $('#room1sw1').change(function () {
    if ($('#room1sw1').is(":checked")) {
      updata.sw1 = 1;

      setTimeout(
        function () {
          updateState();
        }, 100);



    }
    else {
      updata.sw1 = 0;


      setTimeout(
        function () {
          updateState();
        }, 100);
    }
  });

  $('#room1sw2').change(function () {
    if ($('#room1sw2').is(":checked")) {
      updata.sw2 = 1;

      setTimeout(
        function () {
          updateState();
        }, 100);
    }
    else {
      updata.sw2 = 0;

      setTimeout(
        function () {
          updateState();
        }, 100);
    }
  });



  $('#room1sw3').change(function () {
    if ($('#room1sw3').is(":checked")) {
      updata.sw3 = 1;

      setTimeout(
        function () {
          updateState();
        }, 100);
    }
    else {
      updata.sw3 = 0;
      setTimeout(
        function () {
          updateState();
        }, 100);
    }
  });
}


function updateState() {

  if (flag == "1") {
    updata = $(this).serialize() + "&" + $.param(updata);
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "room1Update.php", //Relative or absolute path to response.php file
      data: updata,
      success: function (updata) {}
    });

    setTimeout(
      function () {
        location.reload();
      }, 100);
  }
}

function readState() {

  if (room1State[1] == 1) {
    $('#room1sw1').prop('checked', true);
  }
  else {
    $('#room1sw1').prop('checked', false);
  }

  if (room1State[2] == 1) {
    $('#room1sw2').prop('checked', true);
  }
  else {
    $('#room1sw2').prop('checked', false);
  }

  if (room1State[3] == 1) {
    $('#room1sw3').prop('checked', true);
  }
  else {
    $('#room1sw3').prop('checked', false);
  }
}
