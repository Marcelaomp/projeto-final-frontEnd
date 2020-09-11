 var nav = document.getElementById("nav");
 var contato = document.getElementById("botao-contato-item");

// Referenciar Modal
var modal = document.getElementById('myModal');
// Pegar imagens
var images = document.getElementsByClassName('myImages');
// A imagem no modal
var modalImg = document.getElementById("img01");
// Capturar o caption
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    nav.classList.add("esconder");
    contato.classList.add("esconder");
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  nav.classList.remove("esconder");
  contato.classList.remove("esconder");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        nav.classList.remove("esconder");
        contato.classList.remove("esconder");
    }
}
