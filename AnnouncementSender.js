/***************************************
 *        Sarim Shahwar        		   *
 *Teacher Annoucement Sender Javascript*
 **************************************/

var TeacherAnnouncement = [];
var TeacherGrade = [];
var TeacherClub = [];
var TeacherGender = [];
var i = 0

// Assigning variable and set a value for the index. 
//The square Bracket is used for arrays. Once the information transfers from teacher selection and the student selection, the informtion will be displayed in an array. 

function getData() 
{

	TeacherGrade[i] = document.getElementById("Tgrade").value;
	TeacherGender[i] = document.getElementById("Tgender").value;
	TeacherClub[i] = document.getElementById("Tclub").value;
	TeacherAnnouncement[i] = document.getElementById("Tannouncement").value;
	
	{
		confirm("Announcement : " + TeacherAnnouncement[i] + "\nGrade : " + TeacherGrade[i] + "\nClub : " + TeacherClub[i] +  "\nGender : " + TeacherGender[i]);
		/* Function gets user input and takes uses a confirm message to create a promot showing the information that the user put into
		 localStorage.setItem('teacherAnnouncement', TeacherGrade + TeacherClub + TeacherGender); */
	}
	i++;

	//Store
	localStorage.setItem('TeacherAnnouncement', JSON.stringify(TeacherAnnouncement));
	localStorage.setItem('TeacherGrade', JSON.stringify(TeacherGrade));
	localStorage.setItem('TeacherGender', JSON.stringify(TeacherGender));
	localStorage.setItem('TeacherClub', JSON.stringify(TeacherClub));
}

   //The local storage variable are put into strings with Json.Stringify
	
	