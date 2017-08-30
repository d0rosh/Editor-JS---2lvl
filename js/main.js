var text_field = document.getElementById('area_field');
var body = document.body;

function getQ(a){
	return document.querySelector(a);
};

getQ(".edit").onclick = function() {
	getQ(".editor_text").style.display = "block";
	getQ(".editor_styles").style.display = "none";
	getQ(".wrap_table_list").style.display = "none";
	text_field.value = getQ(".screen").innerHTML;
}

getQ(".styles").onclick = function() {
	getQ(".editor_styles").style.display = "block";
	getQ(".editor_text").style.display = "none";
	getQ(".wrap_table_list").style.display = "none";
}


getQ(".save").onclick = function() {
	getQ(".screen").innerHTML = text_field.value;
}

// create tagName in textarea
var area_nav = document.querySelectorAll(".tag");
for (var i = 0; i < area_nav.length; i++) {
	area_nav[i].onclick = function() {
		var value = this.value;
		switchTag(value);
	}
}

function switchTag(x) {
	switch(x) {
		case "p":
			text_field.value = getQ(".screen").innerHTML + "<p></p>";
			break;
		case "h1":
			text_field.value = getQ(".screen").innerHTML + "<h1></h1>";
			break;
		case "h2":
			text_field.value = getQ(".screen").innerHTML + "<h2></h2>";
			break;
		case "h3":
			text_field.value = getQ(".screen").innerHTML + "<h3></h3>";
			break;
		case "h4":
			text_field.value = getQ(".screen").innerHTML + "<h4></h4>";
			break;
		case "h5":
			text_field.value = getQ(".screen").innerHTML + "<h5></h5>";
			break;
		case "h6":
			text_field.value = getQ(".screen").innerHTML + "<h6></h6>";
			break;
		case "a":
			text_field.value = getQ(".screen").innerHTML + "<a href='' target='_blank'></a>";
			break;

		default :
			text_field.value = getQ(".screen").innerHTML;
	}
}

// font-size
var fontS = document.querySelectorAll(".fontS");
for (var i = 0; i < fontS.length; i++) {
	fontS[i].onclick = function() {
		getQ(".screen").style.fontSize = this.value;			
	}
}

// font-family
var fontF = document.getElementById('fontF');
fontF.onchange = function() {
	for (var i = 0; i < fontF.children.length; i++) {
		if (fontF.children[i].selected) {
			getQ(".screen").style.fontFamily = this.value;
		}
	}
}

// text color or background color
var palette_col = document.getElementById('palette_color');
body.onclick = function(event) {
	var target = event.target;
	if (target.classList.contains("text_color")) {
		palette_col.style.display = "block";
		palette_col.classList.add("mainColor");
		palette_col.classList.remove("mainBack");
	}

	else if (target.classList.contains("back_color")) {
		palette_col.style.display = "block";
		palette_col.classList.add("mainBack");
		palette_col.classList.remove("mainColor");
	}
	else {
		palette_col.style.display = "none";
	}

}

palette_col.onclick = function(event) {
	var target = event.target;
	if (target.parentNode.classList.contains("mainColor")) {
		getQ(".screen").style.color = target.style.background;
		getQ(".text_color").style.background = target.style.background;
		this.style.display = "none";
	}else {
		getQ(".screen").style.background = target.style.background;
		getQ(".back_color").style.background = target.style.background;
		this.style.display = "none";
	}
}

// cursive ,bold and undeline text
var boldText = document.getElementById('t_bold');
boldText.onclick = function() {
	if (this.checked) {
		getQ(".screen").style.fontWeight = "bold";
	}else {
		getQ(".screen").style.fontWeight = "normal";
	}
}
var cursiveText = document.getElementById('t_cursive');
cursiveText.onclick = function() {
	if (this.checked) {
		getQ(".screen").style.fontStyle = "italic";
	}else {
		getQ(".screen").style.fontStyle = "normal";
	}
}
var underlineText = document.getElementById('t_under');
underlineText.onclick = function() {
	if (this.checked) {
		getQ(".screen").style.textDecoration = "underline";
	}else {
		getQ(".screen").style.textDecoration = "none";
	}
}



// blocked window and validate
getQ(".blocked").onclick=function() {
	getQ(".blocked_popup").style.display = "block";
}


var pass = 5273;
getQ(".validate").onclick = function() {
	if (getQ(".popup_pass").value == pass) {
		getQ(".demo_text").innerHTML = "";
		getQ(".blocked_popup").style.display = "none";
	}else {
		getQ(".demo_text").innerHTML = "Пароль не вірний";
	}
	getQ(".popup_pass").value = "";
}


// add window createTabla and list
getQ(".add").onclick = function() {
	getQ(".editor_text").style.display = "none";
	getQ(".editor_styles").style.display = "none";
	getQ(".wrap_table_list").style.display = "block";
}

// tabs
var tab_h = document.querySelectorAll(".tab_h");
var tab_b = document.querySelectorAll(".tab_b");
for (var i = 0; i < tab_h.length; i++) {
	tab_h[i].onclick = function(event) {
		var target = event.target;
		var x = target.getAttribute("data-tab");
		for (var j = 0; j < tab_b.length; j++) {
			tab_b[j].classList.remove("active");
			tab_h[j].classList.remove("active_tab");
		}
		tab_h[x].classList.add("active_tab");
		tab_b[x].classList.add("active");

		// добавляння допоміжного класу кнопці WATCH
		if (tab_h[0].classList.contains("active_tab")) {
			getQ(".watchT").style.display = "block";
			getQ(".watchL").style.display = "none";
		}
		if (tab_h[1].classList.contains("active_tab")) {
			getQ(".watchT").style.display = "none";
			getQ(".watchL").style.display = "block";
		}


	}	
}


// validate input
var arrSum = [0,0,0,0,0];
var sum = 0;
var valid = document.querySelectorAll('.valid');
for (var i = 0; i < valid.length; i++) {
	valid[i].oninput = function(event) {
		var data =event.target.getAttribute("data-tab");
		var value = parseInt(this.value);

		if (value<99 && value>0 && value != " ") {
			this.style.borderColor = 'green';
			this.style.background = 'green';
			arrSum[data] = 1;
			removeHint(this);
		}else {
			this.style.borderColor = 'red';
			this.style.background = 'red';
			arrSum[data] = 0;
			addHint(this);
		}

		if (arrSum[0]+arrSum[1]+arrSum[2]+arrSum[3]+arrSum[4]==5) {
			getQ(".addTable").style.display="block";
		}else {
			getQ(".addTable").style.display="none";
		}
	}
}

// add and delete hint
function addHint(th) {
	if (!th.nextElementSibling) {
		var hint = getQ(".inputHint");
 		var hintClone = hint.cloneNode(true);
 		th.parentNode.insertBefore(hintClone, th.nextElementSibling);
		hintClone.style.display = "block";
		hintClone.style.left = th.offsetLeft + "px";
		hintClone.style.top = -hintClone.offsetHeight + "px";
	}

}


function removeHint(th) {
	if (th.nextElementSibling) {
		th.nextElementSibling.parentNode.removeChild(th.nextElementSibling);
	}
}


// open and exit window example
getQ(".exam_btn").onclick = function() {
	getQ(".exam").style.display = "none";
	getQ(".openExam").style.display = "block";
}
getQ(".openExam").onclick = function() {
	getQ(".exam").style.display = "block";
	getQ(".openExam").style.display = "none";
}




// create table
function createTable(force,f) {
	var target = event.target;
	var countTr = getQ(".countTr").value;
	var countTd = getQ(".countTd").value;
	var widthTd = getQ(".widthTd").value;
	var heightTd = getQ(".heightTd").value;
	var borderW = getQ(".borderW").value;
	var borderType = document.getElementById('typeLine').value;
	var borderC = getQ('.border_color').value;

	var table = document.createElement("table");
	table.id = "tab";
	


	for (var i = 0; i < countTr; i++) {
		var tr = document.createElement("tr");
		table.appendChild(tr);	
		for (var j = 0; j < countTd; j++) {
			var td = document.createElement("td");
			td.style.width = widthTd + "px";
			td.style.height = heightTd + "px";
			td.style.borderColor = borderC;
			td.style.borderWidth = borderW + "px";
			td.style.borderStyle = borderType;
			tr.appendChild(td);
		}
	
	}
	// append table in textarea or block example
	if (f==1) {
		force.appendChild(table);
	}
	else if(f==2){
		force.value += "<table>" + table.innerHTML + "</table>";
	}
	
}

getQ(".watchT").onclick = function() {
	createTable(getQ(".exam_text"),1);
}

getQ(".addTable").onclick = function() {
	createTable(text_field,2);
	getQ(".wrap_table_list").style.display = "none";
	getQ(".editor_text").style.display = "block";
}



// вибір маркера
var listType = document.querySelectorAll(".listType");
for (var i = 0; i < listType.length; i++) {
	var checkList = 0;
	listType[i].onclick = function() {
		getQ(".addList").style.display = "none";
		getQ(".count_li_list").style.display = "none";
		if (this.classList.contains("checkNumber")) {
			getQ(".block_number_list").style.display = "block";
			getQ(".block_marker_list").style.display = "none";
			checkList = 0;
			typeMark1();

		}
		if (this.classList.contains("checkMarker")) {
			getQ(".block_number_list").style.display = "none";
			getQ(".block_marker_list").style.display = "block";
			checkList = 1;
			typeMark2();		
		}
	}
}

function typeMark1() {
	var typeMark1 = document.getElementById('typeMark1');
	typeMark1.onchange = function() {
	if (typeMark1.value!="") {
		getQ(".addList").style.display = "block";
		getQ(".count_li_list").style.display = "block";
	}else {
		getQ(".addList").style.display = "none";
		getQ(".count_li_list").style.display = "none";
	}
	}
}

function typeMark2() {
	var typeMark2 = document.getElementById('typeMark2');
	typeMark2.onchange = function() {
	if (this.value!="") {
		getQ(".addList").style.display = "block";
		getQ(".count_li_list").style.display = "block";
	}else {
		getQ(".addList").style.display = "none";
		getQ(".count_li_list").style.display = "none";
	}
}
}


// create list
function createList(forceList,f1) {
	 var marker;
	 if (checkList==0) {
	 	marker = document.getElementById('typeMark1').value;
	 	var list = document.createElement("ol");
	 	list.id = "olList";
	 	list.type = marker;
	 }else if(checkList==1) {
	 	marker = document.getElementById('typeMark2').value;
	 	var list = document.createElement("ul");
		list.id = "ulList";
	 	list.type = marker;
	 }
	 var countLi = getQ(".countLi").value;
	
	var div = document.createElement("div");
	body.appendChild(div);
	div.style.display = "none";
	div.appendChild(list);


	for (var i = 0; i < countLi; i++) {
		var li = document.createElement("li");
		li.innerHTML = "Текст";
		list.appendChild(li);
	}

	if (f1==1) {
		forceList.appendChild(list);
	}
	else if(f1==2){
		forceList.value += div.innerHTML;
	}
}

getQ(".addList").onclick = function() {
	createList(text_field,2);
	getQ(".wrap_table_list").style.display = "none";
	getQ(".editor_text").style.display = "block";

}
getQ(".watchL").onclick = function() {
	createList(getQ(".exam_text"),1);
}


// script drag n drop
var dragExem = document.querySelector(".exam");
var dragTopLine = document.querySelector(".exam_topline");
function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

dragTopLine.onmousedown = function(e) {

  var coords = getCoords(dragTopLine);
  shiftX = e.pageX - coords.left;
  shiftY = e.pageY - coords.top;

  dragExem.style.position = 'absolute';
 
  moveAt(e);

  dragExem.style.zIndex = 9999;

  function moveAt(e) {
    dragExem.style.left = e.pageX - shiftX + 'px';
    dragExem.style.top = e.pageY - shiftY + 'px';
  }



  document.onmousemove = function(e) {
    moveAt(e);
  };

  dragExem.onmouseup = function() {
    document.onmousemove = null;
    dragExem.onmouseup = null;
  };

}

dragExem.ondragstart = function() {
  return false;
};