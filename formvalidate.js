function valid()
{
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let conformpassword = document.getElementById("conformpassword").value;

    let nameerror = document.getElementById("nameerror");
    let emailerror = document.getElementById("emailerror");
    let passworderror = document.getElementById("passworderror");
    let conformpassworderror = document.getElementById("conformpassworderror");

    // Clear previous errors
    nameerror.innerHTML = "";
    emailerror.innerHTML = "";
    passworderror.innerHTML = "";
    conformpassworderror.innerHTML = "";

    // Patterns
    let namepat = /^[A-Za-z ]{3,}$/;
    let emailpat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // Name
    if(name == "")
    {
        nameerror.innerHTML = "Name can't be empty";
        isValid = false;
    }
    else if(!namepat.test(name))
    {
        nameerror.innerHTML = "Enter a valid name";
        isValid = false;
    }

    // Email
    if(email == "")
    {
        emailerror.innerHTML = "Email can't be empty";
        isValid = false;
    }
    else if(!emailpat.test(email))
    {
        emailerror.innerHTML = "Enter a valid email";
        isValid = false;
    }

    // Password
    if(password == "")
    {
        passworderror.innerHTML = "Password can't be empty";
        isValid = false;
    }
    else if(!passwordpat.test(password))
    {
        passworderror.innerHTML = "Min 8 chars, A-Z, a-z, 0-9 & Special Character";
        isValid = false;
    }

    // Confirm Password
    if(conformpassword == "")
    {
        conformpassworderror.innerHTML = "Confirm Password can't be empty";
        isValid = false;
    }
    else if(password != conformpassword)
    {
        conformpassworderror.innerHTML = "Password does not match";
        isValid = false;
    }

    return isValid;
}