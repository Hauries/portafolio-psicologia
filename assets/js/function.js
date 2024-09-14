function loadHeaderFooter(){
  var headerVar = new XMLHttpRequest();
  headerVar.open("GET", "header.html", true);
  headerVar.onreadystatechange = function () {
      if (headerVar.readyState == 4 && headerVar.status == 200) {
          document.getElementById("header").innerHTML = headerVar.responseText;
          
          // Aquí llamas a las funciones que necesitas inicializar en el header
          initHeaderFunctions();
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
function initHeaderFunctions() {
  const menuBtn = document.getElementById("menu-btn")
  const navLinks = document.getElementById("nav-links")
  const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen =  navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line "); 

});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
  // Aquí puedes añadir más eventos o funcionalidades que dependan del header cargado
}