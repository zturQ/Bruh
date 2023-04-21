var button = document.getElementsByClassName("butao");

function logar(){     
    var user = document.getElementById("user").value
    var passwd = document.getElementById("passwd").value
    if (user == "adm" && passwd == "admin33"){
            location.href = "home.html";
            alert("You are logged in");
    } else{
        alert("Password or Username are incorrect");
    }
}