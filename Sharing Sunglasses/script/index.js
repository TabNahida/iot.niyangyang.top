var UserName;

function fetchJSON(url) 
{
    return fetch(url)
      .then(response => response.json())
      .catch(error => 
        {
            console.error('Error:', error);
        });
}

function SignInDiv()
{
    var DivSign = document.getElementById("NavLiA_sign");
    var ddm = document.getElementById("DropDownMenu");
    fetchJSON("/database/userlog/IsSignIn.php")
    .then(function(RequestJson) 
    {
      is_sign_in = RequestJson.is_sign_in;
      if (is_sign_in) 
      {
        UserName = RequestJson.name;
        DivSign.href = "/service/user.html";
        DivSign.innerHTML = "<p>" + UserName + "</p>";
        ddm.classList.replace("notshow","dropdown-content")
      } 
      else 
      {
        DivSign.href = "/service/sign.html";
        DivSign.innerHTML = "<p>Sign In</p>";
      }
    })
    .catch(function(error) 
    {
      console.error('Error:', error);
    });
}