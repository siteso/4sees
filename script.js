// COMMUNICATION POPUP

// Get the modal
var modal = document.getElementById("popupCommunication");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("textCommunication");
var modalImg = document.getElementById("defnCommunication");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// COMPETENCE POPUP

// Get the modal
var modal2 = document.getElementById("popupCompetence");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("textCompetence");
var modalImg2 = document.getElementById("defnCompetence");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}


// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}





// CONNECTION POPUP

// Get the modal
var modal3 = document.getElementById("popupConnection");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("textConnection");
var modalImg3 = document.getElementById("defnConnection");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
