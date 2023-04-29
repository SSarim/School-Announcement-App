/******************************
 *        Sarim Shahwar        *
 *Annoucement Viewer Javascript*
 ******************************/

var TeacherAnnouncement = [];
var TeacherGrade = [];
var TeacherClub = [];
var TeacherGender = [];
var StudentGrade;
var StudentClub;
var StudentGender;
var i = 0
var AllDetail = "";
var AllGrad = "";
var AllGens = "";
var AllClb = "";

// Assigning variable and set a value for the index. The quotations are used to show that there will be some type of text output. 
//The square Bracket is used for arrays. Once the information transfers from teacher selection and the student selection, the informtion will be displayed in an array. 
//The location where the information is displayed will be where ever the "Onload" code line is place in the Announcement Viewer HTML.

function grabInfo() {

	TeacherGrade = JSON.parse(localStorage.getItem("TeacherGrade"));
	StudentGrade = localStorage.getItem("StudentGrade");
	TeacherClub = JSON.parse(localStorage.getItem("TeacherClub"));
	StudentClub = localStorage.getItem("StudentClub");
	TeacherGender = JSON.parse(localStorage.getItem("TeacherGender"));
	StudentGender = localStorage.getItem("StudentGender");
	TeacherAnnouncement = JSON.parse(localStorage.getItem("TeacherAnnouncement"));
}
//This function is used to recive the data and place it into local storage for further uses.
//JSON.parse is used becuase the data is put into strings. This is displayed in the Teacher Annoucement Sender Javascript.

function displayall() {
for (var i = 0; i < TeacherAnnouncement.length; i += 1) {
//Created a For Loop using the Index variable
// Crated If Statement for each secton of the code that will function to display information from Local Storage with Exceptions.
//Each Line is telling the computer that if One Input from the Teacher is the same as the Student Input, then it will display that information. 
//If they are not the same, then the computer will display the information for All students.
	if (TeacherGrade[i] == StudentGrade || TeacherGrade[i] == "All") {
		if (TeacherClub[i] == StudentClub || TeacherClub[i] == "All") {
 	 		if (TeacherGender[i] == StudentGender || TeacherGender[i] == "All") {
//The information from Local Storage will be displayed with 2 spaces between each section.
 	 			AllDetail += TeacherAnnouncement[i] + "<br> <br>";
 	 			AllGrad += TeacherGrade[i] + "<br> <br>";
 	 			AllGens += TeacherGender[i] + "<br> <br>";
 	 			AllClb += TeacherClub[i] + "<br> <br>";
			}
		}
	}
}
   document.getElementById("TeacherAnnouncement").innerHTML = AllDetail;
    document.getElementById("TeacherGrade").innerHTML = AllGrad;
     document.getElementById("TeacherGender").innerHTML = AllGens;
      document.getElementById("TeacherClub").innerHTML = AllClb;
}
//This is the code in which the computer get each variable information and displays it through the set variables Above. "AllDetail, AllGrad, AllGens, AllClb"
//This function is used to set the order in which the code will be executed. This fuction will first Grab the information then display it.
function Start() {
		grabInfo();
		displayall();

}
