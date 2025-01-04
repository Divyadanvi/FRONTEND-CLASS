const form = document.getElementById("my form");
const ErrorMessage = document.getElementById("ErrorMessage");

form.addEventListener('submit', function(event){
ErrorMessage.textcontent="";

const Password = document.getElementById("Password").value;
if(Password.length < 6)
{
    Event.preventDefault();
    ErrorMessage.textcontent = "Password"
}


})

