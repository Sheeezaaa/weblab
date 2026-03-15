function generateCV(){

document.getElementById("cvname").innerHTML =
document.getElementById("name").value;

document.getElementById("cvcontact").innerHTML =
document.getElementById("email").value +
"<br>" +
document.getElementById("phone").value;

document.getElementById("cvedu").innerHTML =
"Degree: " + document.getElementById("degree").value +
"<br>University: " + document.getElementById("uni").value +
"<br>CGPA: " + document.getElementById("cgpa").value;

document.getElementById("cvexp").innerHTML =
"Job Title: " + document.getElementById("job").value +
"<br>Company: " + document.getElementById("company").value +
"<br>" + document.getElementById("desc").value;



let file = document.getElementById("img").files[0];

if(file){

let reader = new FileReader();

reader.onload = function(e){
document.getElementById("profile").src = e.target.result;
}

reader.readAsDataURL(file);

}

}

function downloadPDF(){
window.print();
}
