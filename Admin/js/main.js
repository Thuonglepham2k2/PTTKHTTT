function addRows(){ 
	var table = document.getElementById('emptbl');
	var rowCount = table.rows.length;
	var cellCount = table.rows[0].cells.length; 
	var row = table.insertRow(rowCount);
	for(var i =0; i <= cellCount; i++){
		var cell = 'cell'+i;
		cell = row.insertCell(i);
		var copycel = document.getElementById('col'+i).innerHTML;
		cell.innerHTML=copycel;
		if(i == 5){ 
			var radioinput = document.getElementById('col5').getElementsByTagName('input'); 
			for(var j = 0; j <= radioinput.length; j++) { 
				if(radioinput[j].type == 'radio') { 
					var rownum = rowCount;
					radioinput[j].name = 'gender['+rownum+']';
				}
			}
		}
	}
}
function deleteRows(){
	var table = document.getElementById('emptbl');
	var rowCount = table.rows.length;
	if(rowCount > '2'){
		var row = table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('There should be atleast one row');
	}
}
$(function() {
    $("#Date").datepicker({
        changeMonth: true,
        changeYear: true
        });
})

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
sidebar.classList.toggle("active");
if(sidebar.classList.contains("active")){
sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

