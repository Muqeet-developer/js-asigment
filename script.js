let input  = prompt("enter a city")
let body =  document.getElementById("body");
 if (input === "Karachi") {
    document.write("welcom to the city of lights")
 } else {
    document.write("City Not Found ")
}

function css () {
    body.style.backgroundColor = "violet"
    body.style.textAlign = "center"
    body.style.display = "block"
    body.style.justifyContent = "center"
    body.style.textAlign = "center"
    body.style.fontSize = "38px"
    body.style.fontFamily = "Jaro", "sans-serif"
    body.style.marginBottom = "300px"
    body.style.fontStyle = "italic"
    body.style.textDecoration = "none"
    body.style.cursor = "pointer"
}
css();
input.classlist.add("input");
