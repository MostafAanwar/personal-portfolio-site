function toggleDarkLight()
{
    var body = document.getElementById("cls");
    var currentClass = body.className;
    currentClass === "dark-mode" ? lightMode() : darkMode();
}
function lightMode()
{
    document.getElementById('cls').className = "light-mode";
    document.getElementById('h1Cs').style.color = '#111';
    document.getElementById('name').style.color = '#111';
    document.getElementById('email').style.color = '#111';
    document.getElementById('message').style.color = '#111';
    document.getElementById('logo').style.color = '#111';
}

function darkMode()
{
    document.getElementById('cls').className = "dark-mode";
    document.getElementById('h1Cs').style.color = '#eee';
    document.getElementById('name').style.color = '#eee';
    document.getElementById('email').style.color = '#eee';
    document.getElementById('message').style.color = '#eee';
    document.getElementById('logo').style.color = '#eee';
}