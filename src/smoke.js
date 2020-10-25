var smoke = "";


$(document).ready(function () {


  $.ajax({
    url: 'smoke.php',                  //the script to call to get data          
    data: "",                        //you can insert url argumnets here to pass to api.php for example "id=5&parent=6"
    dataType: 'json',                //data format      
    success: function (data)          //on recieve of reply
    {
      smoke = data;
    }
  });
  setTimeout(
    function () {
      $("#disp").append("<strong>smoke : " + smoke[1] + "</strong>");
    }, 100);

  setTimeout(
    function () {
      location.reload();
    }, 3000);
});
