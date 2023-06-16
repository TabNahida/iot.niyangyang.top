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

function Renting()
{
    var pattern = /^[a-zA-Z0-9_]+$/;
    var inputpassword = document.getElementById("userpassword");
    var upassword = inputpassword.value;
    var RequestJson = {password:upassword};
    if (pattern.test(upassword))
    {
        postJson("/database/userlog/Rent.php",RequestJson)
        .then(function(ResponseJson)
        {
            if (ResponseJson.is_rent)
            {
                document.getElementById("opencode").innerText = "Open code: middle, up, down, left and right";
                setTimeout
                (() => {
                    window.location.href = "/index.html";
                },3000);
            }
            else
            {
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