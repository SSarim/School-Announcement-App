/******************************
 *        Sarim Shahwar        *
 *  Student Option Javascript  *
 ******************************/

var StudentGrade;
var StudentClub;
var StudentGender;

function getData() {
	StudentGrade = document.getElementById("Sgrade").value;
	StudentClub = document.getElementById("Sclub").value;
	StudentGender = document.getElementById("Sgender").value;

			{	//Alerts localStorage.setItem('studentSelector', StudentGrade + StudentClub + StudentGender) It will be a pop-up confirming the students selection
		confirm("Grade : " + StudentGrade + "\nClub : " + StudentClub + "\nGender : " + StudentGender)
	}
	
	localStorage.setItem('StudentGrade', StudentGrade);
	localStorage.setItem('StudentClub', StudentClub);
	localStorage.setItem('StudentGender', StudentGender);
	
}



