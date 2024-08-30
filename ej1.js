
let b1 = document.getElementById("botton");

    b1.addEventListener("click", function(){

        let f1 = document.getElementById("nombre").value;
        let f2 = document.getElementById("asunto").value;
        let f3 = document.getElementById("mensaje").value;

        const patron = /^[A-Za-z]+$/;
        let valid = true;

        if(!patron.test(f1)){
            alert("Por favor ingrese solo letras en los campos");
            valid = false;
        }
        else if(!patron.test(f2)){
            alert("Por favor ingrese solo letras en los campos");
            valid = false;
        }
        else if(!patron.test(f3)){
            alert("Por favor ingrese solo letras en los campos");
            valid = false;
        }

        else{
            alert("Formulario enviado con exito");
            valid = true;
        }

    })


