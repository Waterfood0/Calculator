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
const text = document.createElement("h1");
const enter = document.querySelector(".enter");

let sequence = [];
let value = [];
let sings =[];
let p =0;

text.setAttribute("class", "text");
text.textContent = "enter";

enter.appendChild(text);

one.addEventListener("click", (e) => {
    
    sequence.push("1");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "1"){
        
        sequence.push("1");
    }
});
two.addEventListener("click", (e) => {
    
    sequence.push("2");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "2"){
        
        sequence.push("2");
    }
});
three.addEventListener("click", (e) => {
    
    sequence.push("3");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "3"){
        
        sequence.push("3");
    }
});

four.addEventListener("click", (e) => {
    
    sequence.push("4");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "4"){
        
        sequence.push("4");
    }
});

five.addEventListener("click", (e) => {
    
    sequence.push("5");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "5"){
        
        sequence.push("5");
    }
});

six.addEventListener("click", (e) => {
    
    sequence.push("6");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "6"){
        
        sequence.push("6");
    }
});

seven.addEventListener("click", (e) => {
    
    sequence.push("7");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "7"){
        
        sequence.push("7");
    }
});

eight.addEventListener("click", (e) => {
    
    sequence.push("8");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "8"){
        
        sequence.push("8");
    }
});

nine.addEventListener("click", (e) => {
    
    sequence.push("9");
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "9"){
        
        sequence.push("9");
    }
});


minus.addEventListener("click", (e) => {
    sings.push("-");
    w();
});
document.addEventListener("keydown", (e) => {
    if(e.key === "-"){
        sings.push("-");
        w();
    }
});

delen.addEventListener("click", (e) => {
    sings.push("/");
    w();
});
document.addEventListener("keydown", (e) => {
    if(e.key === "/"){
        sings.push("/");
        w();
    }
});

ymn.addEventListener("click", (e) => {
    sings.push("*");
    w();
});
document.addEventListener("keydown", (e) => {
    if(e.key === "*"){
        sings.push("*");
        w();
    }
});

plus.addEventListener("click", (e) => {
    sings.push("+");
    w();
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "+"){
        sings.push("+");
        w();
    }
});

ravn.addEventListener("click", (e) => {
    result();
});
document.addEventListener("keydown", (e) => {
    
    if(e.key === "+"){
        result();
    }
});


function w(){
    p = sequence[0]
    for(let i = 1; i < sequence.length; i++){
        p = p+sequence[i];
    }
    value.push(p);


    for(let i = 0; i <= sequence.length; i++){
        sequence.splice(0, 1);
    }
}

function result(){
    sings.push("=");
    w();
    let result = value[0];
    for(let i =0; i < sings.length;i++){
        if(sings[i] === "+"){
            result = parseInt(result) + parseInt(value[i+1]);
        }
        if(sings[i] === "-"){

            result = parseInt(result) - parseInt(value[i+1]);
            
        }
        if(sings[i] === "*"){
            
            result = parseInt(result) * parseInt(value[i+1]);
            
        }
        if(sings[i] === "/"){
            console.log(`${result} === result test `);
            console.log(`${parseInt(value[i++])} === value i++ test `);

            result = parseInt(result) / parseInt(value[i+1]);
            console.log(`${result} === result after test`);
        }
        if(sings[i] === "="){
            console.log(`${result} === result`);
        }   
    }
    console.log(`${result} === result`);
    p = result;
    result = 0;
    clear();
}

function clear(){
    console.log(sings, value, sequence);
    for(let i = 0; i <= sings.length;i++){
        sings.splice(0, 1);
    }
    for(let i = 0; i <= value.length;i++){
        value.splice(0, 1);
    }
    for(let i = 0; i <= sequence.length;i++){
        sequence.splice(0, 1);
    }
    sequence.push(p);
    console.log(sings, value, sequence);
}