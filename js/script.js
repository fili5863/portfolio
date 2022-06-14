// laver variabler på knapper
let webKnap = document.querySelector("#webKnap");
let uxKnap = document.querySelector("#uxKnap");
let animKnap = document.querySelector("#animKnap");
let indKnap = document.querySelector("#indKnap");
let pfKnap = document.querySelector("#pfKnap");

// laver variabler på sectioner
let web = document.querySelector("#web");
let ux = document.querySelector("#ux");
let anim = document.querySelector("#animation");
let ind = document.querySelector("#indhold");
let pf = document.querySelector("#portfolio");

webKnap.addEventListener("click", webFourth);
uxKnap.addEventListener("click", uxFourth);
animKnap.addEventListener("click", animFourth);
indKnap.addEventListener("click", indFourth);
pfKnap.addEventListener("click", pfFourth);

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
