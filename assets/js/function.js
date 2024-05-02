function loadHeaderFooter(){
    var headerVar = new XMLHttpRequest();
    headerVar.open("GET", "header.html", true);
    headerVar.onreadystatechange = function () {
      if (headerVar.readyState == 4 && headerVar.status == 200) {
        document.getElementById("header").innerHTML = headerVar.responseText;
      }
    };
    var footerVar = new XMLHttpRequest();
    footerVar.open("GET", "footer.html", true);
    footerVar.onreadystatechange = function () {
      if (footerVar.readyState == 4 && footerVar.status == 200) {
        document.getElementById("footer").innerHTML = footerVar.responseText;
      }
    };
    headerVar.send();
    footerVar.send();
}
