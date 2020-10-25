var temperature = "";

$(document).ready(function () {
  $.ajax({
    url: 'temper.php',                  //the script to call to get data          
    data: "",                        //you can insert url argumnets here to pass to api.php for example "id=5&parent=6"
    dataType: 'json',                //data format      
    success: function (data)          //on recieve of reply
    {
      temperature = data;

    }
  });
  setTimeout(
    function () {
      $("#disp").append("<strong>Temperature : " + temperature[1] + "&deg;C</strong>");
    }, 100);

  setTimeout(
    function () {
      location.reload();
    }, 3000);
});
