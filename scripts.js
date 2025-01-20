function ver(tgt) {
    const sel = document.getElementById('sel');
    const cte = sel.options[sel.selectedIndex].text;

    if (cte == tgt) {
        return true;
    }
    return false;
}
function re() {
    const req0 = document.getElementById('send0').value.toLowerCase();
    const t0 = req0.slice(-1);

    if (t0 != "/") {
        alert("Your last character must be a /");
    }
    if (ver('GET')) {
        switch (true) {
            case req0 == "https://postfolio.devlucas.page/api/":
                document.getElementById('response0').innerHTML = "LADIES AND GENTLEMAN IT WORKS";
                break;
            case req0 == "https://postfolio.devlucas.page/api/lie/":
                document.getElementById('response0').innerHTML = "This website is a lie!1!!1 It's purely a switch case";
                break;
            case req0 == "https://postfolio.devlucas.page/api/about/":
                document.getElementById('response0').innerHTML = "Hey, I'm Lucas! <br /> I'm high school student maker from São Paulo, Brazil! <br /> Here some things I like: < br /> <ul> <li> Aviation - Studying to be a private pilot :) </li> <li> 3d printers - Ender 3 Pro and Bambu Lab A1 mini owner! I provide maintenance and support </li> <li>CAD - Autodesk Fusion 360 and Onshape user, on-demand part modeling</li> </ul>";
                break;
            case req0 == "https://postfolio.devlucas.page/api/education":
                document.getElementById('response0').innerHTML = "Escola Técnica Estadual de São Paulo - ETEC Zona Leste <br /> High School Diploma + Technical degree, Systems Devlopment <br /> Class of '26";
                break;
            case req0 == "https://postfolio.devlucas.page/api/languages":
                document.getElementById('response0').innerHTML = "Portuguese (Brazil) <br /> English";
                break;
            case req0 == "https://postfolio.devlucas.page/api/sp/":
                window.location.href = "https://youtu.be/vuLtlzMMW6o"
                document.getElementById('response0').innerHTML = "Enter the URL and click Send to get a response";
                break;
        }
    }
    if (ver('POST')) {
        document.getElementById('response0').innerHTML = "We corrently do not support POST requests. Stay tuned for updates."
    }
    if (ver('DELETE')) {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ";
        document.getElementById('response0').innerHTML = "Enter the URL and click Send to get a response";
    }
}
function hp() {
    alert("Try GET /about, but explore possibilities ;)");
}