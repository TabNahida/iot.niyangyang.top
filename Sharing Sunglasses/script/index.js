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

function postJson(url, data) 
{
    return fetch(url, 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => 
    {
      return json;
    })
    .catch(error => 
    {
      console.error(error);
      throw error;
    });
  }

function SignInDiv()
{
    var DivSign = document.getElementById("NavLiA_sign");
    fetchJSON("/database/userlog/IsSignIn.php")
    .then(function(RequestJson) 
    {
      is_sign_in = RequestJson.is_sign_in;
      if (is_sign_in) 
      {
        UserName = RequestJson.name;
        DivSign.href = "/service/user.html";
        DivSign.innerHTML = "<p>" + UserName + "</p>";
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