
var number;


var button = document.getElementById("button");
button.addEventListener("click", myFunction)

function myFunction(){
    number = document.getElementById("number").value;

    console.log(number)

    var radio = document.querySelector("imput[name=operator]:Checked").id;

switch (radio){
    case "binary" : {
        //todo
    }
    case "decimal" : {
var nombrePrint = "";

mettreChiffreEnBinaire(number);

function mettreChiffreEnBinaire(number) {
    var stocke = 0;
    nombrePrint = "";

    while (number != 0) {
        stocke = number % 2;
        number /= 2;
        number = Math.trunc(number);
        nombrePrint = stocke.toString() + nombrePrint; 
    }
}

console.log(nombrePrint);
    }
}
}




