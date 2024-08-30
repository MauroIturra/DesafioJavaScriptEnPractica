let b1= document.getElementById("btn-sumar");
let b2= document.getElementById("btn-restar");

b1.addEventListener("click", function(){
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let resultado  = ((parseInt(v1))+(parseInt(v2)));
    if(resultado>0){
        alert("La suma es: " + resultado);
    }else{
        alert("La suma es: 0");
    }
})

b2.addEventListener("click", function(){
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let resultado  = ((parseInt(v1))-(parseInt(v2)));
    if(resultado>0){
        alert("La resta es: " + resultado);
    }else{
        alert("La resta es: 0");
    }
})