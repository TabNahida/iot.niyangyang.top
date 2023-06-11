var is_sign_in = false;
var UserName;
var Uid;

function fetchJSON(url) 
{
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
}  

function SignInDiv()
{
    var DivSign = document.getElementById("NavLiA_sign");
    var RequestJson = fetchJSON("database/userlog/IsSignIn.php");
    is_sign_in = RequestJson.is_sign_in;
    if(is_sign_in)
    {
        UserName = RequestJson.name;
        Uid = RequestJson.uid;
        DivSign.href = "service/user.html";
        DivSign.innerHTML = "<p>"+UserName+"</p>";
    }
    else
    {
        DivSign.href = "service/sign.html";
        DivSign.innerHTML = "<p>Sign In</p>";
    }
}