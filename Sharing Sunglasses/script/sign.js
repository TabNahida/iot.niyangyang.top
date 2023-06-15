function postJson(url, data) 
{
  return fetch(url, 
  {
    method: "POST",
    headers: 
    {
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

function SignIn()
{
    var pattern = /^[a-zA-Z0-9_]+$/;
    var inputname = document.getElementById("username");
    var inputpassword = document.getElementById("userpassword");
    var uname = inputname.value;
    var upassword = inputpassword.value;
    var RequestJson = {name:uname,password:upassword};
    if (pattern.test(uname))
    {
        if (pattern.test(upassword))
        {
            postJson("/database/userlog/SignIn.php",RequestJson)
            .then(function(ResponseJson)
            {
                if (ResponseJson.sign_in)
                {
                    window.location.href = "/service/rent.html";
                }
                else
                {
                    inputname.value = "";
                    inputname.placeholder = ResponseJson.error;
                    inputpassword.value = "";
                    inputpassword.placeholder = ResponseJson.error;
                }
            });
        }   
        else
        {
            inputpassword.value = "";
            inputpassword.placeholder = "密码格式不正确";
        }
    }
    else
    {Z
        inputname.value = "";
        inputname.placeholder = "名字格式不正确";
        if (!pattern.test(upassword))
        {
            inputpassword.value = "";
            inputpassword.placeholder = "密码格式不正确";
        }
    }
}

function SignUp()
{
    var pattern = /^[a-zA-Z0-9_]+$/;
    var inputname = document.getElementById("username");
    var inputpassword = document.getElementById("userpassword");
    var uname = inputname.value;
    var upassword = inputpassword.value;
    var RequestJson = {name:uname,password:upassword};
    if (pattern.test(uname))
    {
        if (pattern.test(upassword))
        {
            postJson("/database/userlog/SignUp.php",RequestJson)
            .then(function(ResponseJson)
            {
                if (ResponseJson.sign_up)
                {
                    window.location.href = "/service/rent.html";
                }
                else
                {
                    inputname.value = "";
                    inputname.placeholder = ResponseJson.error;
                    inputpassword.value = "";
                    inputpassword.placeholder = ResponseJson.error;
                }
            });
        }   
        else
        {
            inputpassword.value = "";
            inputpassword.placeholder = "密码格式不正确";
        }
    }
    else
    {
        inputname.value = "";
        inputname.placeholder = "名字格式不正确";
        if (!pattern.test(upassword))
        {
            inputpassword.value = "";
            inputpassword.placeholder = "密码格式不正确";
        }   
    }
}