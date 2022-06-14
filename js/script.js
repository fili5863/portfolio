// laver variabler på knapper
var webKnap = document.querySelector("#webKnap");
var uxKnap = document.querySelector("#uxKnap");
var animKnap = document.querySelector("#animKnap");
var indKnap = document.querySelector("#indKnap");
var pfKnap = document.querySelector("#pfKnap");

// laver variabler på sectioner
var web = document.querySelector("#web");
var ux = document.querySelector("#ux");
var anim = document.querySelector("#animation");
var ind = document.querySelector("#indhold");
var pf = document.querySelector("#portfolio");

// putter eventlistensers på knapper
webKnap.addEventListener("click", webFourth);
uxKnap.addEventListener("click", uxFourth);
animKnap.addEventListener("click", animFourth);
indKnap.addEventListener("click", indFourth);
pfKnap.addEventListener("click", pfFourth);

// funktioner
function webFourth() {
  web.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
function uxFourth() {
  ux.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
function animFourth() {
  anim.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
function indFourth() {
  ind.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
function pfFourth() {
  pf.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
