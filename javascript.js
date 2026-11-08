const minus = document.querySelector(".min");
const plus = document.querySelector(".plus");
const delen = document.querySelector(".del");
const ravn = document.querySelector(".ravn");
const ymn = document.querySelector(".ymn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

one.addEventListener("click", (e) => {
    console.log(1);
});
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if(e.key === "1"){
        console.log("1 in keyboard");
    }
});