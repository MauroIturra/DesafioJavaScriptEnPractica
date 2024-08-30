let b1 = document.getElementById("btn-1");
let b2 = document.getElementById("btn-2");
let b3 = document.getElementById("btn-3");
let b4 = document.getElementById("btn-4");
let b5 = document.getElementById("btn-5");
let b6 = document.getElementById("btn-6");
let box = document.getElementById("caja");

b1.addEventListener("click", function(){    
    box.style.backgroundColor = "#e53e3e";    
})
b2.addEventListener("click", function(){
    box.style.backgroundColor = "#dd6b20";
})
b3.addEventListener("click", function(){
    box.style.backgroundColor = "#faf089";
})
b4.addEventListener("click", function(){
    box.style.backgroundColor = "#48bb78";
})
b5.addEventListener("click", function(){
    box.style.backgroundColor = "#81e6d9";
})
b6.addEventListener("click", function(){
    box.style.backgroundColor = "#d53f8c";
})