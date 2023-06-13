function SignIn()
{
    var pattern = /^[a-zA-Z0-9_]+$/;
    var inputname = document.getElementById("username");
    var inputpassword = document.getElementById("userpassword");
    var uname = inputname.value;
    var upassword = inputpassword.value;
    if (pattern.test(uname))
    {
        if (pattern.test(upassword))
        {
            var indata
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

function SignUp()
{
    var pattern = /^[a-zA-Z0-9_]+$/;
    var inputname = document.getElementById("username");
    var inputpassword = document.getElementById("userpassword");
    var uname = inputname.value;
    var upassword = inputpassword.value;
    if (pattern.test(uname))
    {
        if (pattern.test(upassword))
        {
            
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