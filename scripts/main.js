async function loadNavbar() {
    const response = await fetch("./components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
}

loadNavbar();