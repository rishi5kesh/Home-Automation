
var selectAllStatementRoom = "SELECT * FROM Room";



var item;
 

 
 var db = openDatabase("homeDB", "1.0", "Home Automation", 1000000);  // Open SQLite Database
 
var dataset;
 
var DataType;
 
 function initDatabase()  // Function Call When Page is ready.
 
{
 
    try {
 
        if (!window.openDatabase)  // Check browser is supported SQLite or not.
 
        {
 
            alert('Databases are not supported in this browser.');
 
        }

    }
 
    catch (e) {
 
        if (e == 2) {
 
            // Version number mismatch. 
 
            console.log("Invalid database version.");
 
        } else {
 
            console.log("Unknown error " + e + ".");
 
        }
 
        return;
 
    }
 
}
 

 


 $(document).ready(function() {
function updateRecord() 
{
    $('#room1sw1').change(function() {
		if($(this).is(":checked")) {
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw1 ='" +1+"' WHERE id = '"+1+"' ;"); });
		}
		else
		{
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw1 ='" +0+"' WHERE id = '"+1+"' ;"); });
		}
	}
	
	$('#room1sw2').change(function() {
		if($(this).is(":checked")) {
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw2 ='" +1+"' WHERE id = '"+1+"' ;"); });
		}
		else
		{
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw2 ='" +0+"' WHERE id = '"+1+"' ;"); });
		}
	}
	
	$('#room1sw2').change(function() {
		if($(this).is(":checked")) {
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw3 ='" +1+"' WHERE id = '"+1+"' ;"); });
		}
		else
		{
		db.transaction(function (tx) { tx.executeSql("UPDATE Room SET sw3 ='" +0+"' WHERE id = '"+1+"' ;"); });
		}
	}
}
});

 


 $(document).ready(
function showRecords() // Function For Retrive data from Database Display records as list
 
{
 
   
 
    db.transaction(function (tx) {
 
        tx.executeSql(selectAllStatementRoom, [], function (tx, result) {
 
            dataset = result.rows;
 
            for (var i = 0, item = null; i < dataset.length; i++) {
 
                item = dataset.item(i);
			}
 
            if(item[1]==1)
			{
			$('.room1sw1').prop('checked', true);
			}
			else
			{
			$('.room1sw1').prop('checked', false);
			}
			
            if(item[2]==1)
			{
			$('.room1sw2').prop('checked', true);
			}
			else
			{
			$('.room1sw2').prop('checked', false);
			}
			
			if(item[3]==1)
			{
			$('.room1sw3').prop('checked', true);
			}
			else
			{
			$('.room1sw3').prop('checked', false);
			}
			
 
        });
 
    });
 
});
 

 