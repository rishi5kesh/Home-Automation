var room2State = "";
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
    url: 'room2.php',                  //the script to call to get data          
    data: "",                        //you can insert url argumnets here to pass to api.php for example "id=5&parent=6"
    dataType: 'json',                //data format      
    success: function (data)          //on recieve of reply
    {
      room2State = data;
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
s
function senseState() {
  $('#room2sw1').change(function () {
    if ($('#room2sw1').is(":checked")) {
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

  $('#room2sw2').change(function () {
    if ($('#room2sw2').is(":checked")) {
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

  $('#room2sw3').change(function () {
    if ($('#room2sw3').is(":checked")) {
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
      url: "room2Update.php", //Relative or absolute path to response.php file
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

  if (room2State[1] == 1) {
    $('#room2sw1').prop('checked', true);
  }
  else {
    $('#room2sw1').prop('checked', false);
  }

  if (room2State[2] == 1) {
    $('#room2sw2').prop('checked', true);
  }
  else {
    $('#room2sw2').prop('checked', false);
  }

  if (room2State[3] == 1) {
    $('#room2sw3').prop('checked', true);
  }
  else {
    $('#room2sw3').prop('checked', false);
  }


}
