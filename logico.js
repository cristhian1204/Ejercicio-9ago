function validar(){
    let checkboxp = document.getElementById("p").checked;
    console.log(checkboxp);
    let checkroom = document.getElementById("q").checked;
    console.log(checkroom);
    let resultado="p AND q es: "+(checkboxp&&checkroom)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    resultado = resultado+"p OR q es: "+(checkboxp||checkroom)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    resultado = resultado+"La negacion de p es: "+(!checkboxp)+"<br>";
    resultado = resultado+"La negacion de q es: "+(!checkroom)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
}
