function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "footer.xml", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var worktime = xmlDoc.getElementsByTagName("worktime")[0].childNodes[0].nodeValue;
            var weekdays = xmlDoc.getElementsByTagName("weekdays")[0].childNodes[0].nodeValue;
            var weekends = xmlDoc.getElementsByTagName("weekends")[0].childNodes[0].nodeValue;
            var location = xmlDoc.getElementsByTagName("location")[0].childNodes[0].nodeValue;
            var copyright = xmlDoc.getElementsByTagName("copyright")[0].childNodes[0].nodeValue;

            var content = `
                <p>${worktime}</p>
                <p>${weekdays}</p>
                <p>${weekends}</p>
                <p class="location">${location}</p>
                <p class="copyright">${copyright}</p>
            `;
            document.getElementById("xml-content").innerHTML = content;
        }
    };
    xhttp.send();
}
window.onload = loadXML;