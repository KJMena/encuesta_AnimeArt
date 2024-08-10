function mostrarResultados(){
    var texto = "<h3>Resultados de la Encuesta:</h3>";
    
    texto += "¿Te ha gustado la página?: " + document.querySelector('input[name="calidad"]:checked').value + "<br/>";
    texto += "¿Te gustaron la mayoría de los animes que aparecen?: " + document.querySelector('input[name="atencion"]:checked').value + "<br/>";
    texto += "¿Te gustó el arte que se utilizo?: " + document.querySelector('input[name="volveria"]:checked').value + "<br/>";
    
    document.getElementById("resultados").innerHTML = texto;
}