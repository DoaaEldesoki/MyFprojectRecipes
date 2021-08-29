let landingPage = document.querySelector (".landing-page");
let imgsArray =["01.jpg","02.jpg","03.jpg","04.jpg"];

setInterval(() => {
  let randomNumber = Math.floor (Math.random() * imgsArray.length);

  landingPage.style.backgroundImage = 'url("../photos/'+ imgsArray [ randomNumber] +'")';

}, 2000);


window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}