function dropFunction() {
  var dropdown = document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropDown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropButton(value) {
  console.log(value);



  var imported = document.createElement('script');
  var container = document.getElementById("container");


  if (value == 1){
      imported.src = 'javascripts/cone.js';
      container.innerHTML = "";
      container.appendChild(imported);
  } else if (value == 2){
    imported.src = 'javascripts/cube.js';
    container.innerHTML = "";
    container.appendChild(imported);
  }
}
