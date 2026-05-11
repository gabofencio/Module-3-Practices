function evaluadorDeNotas(nota){
    let feedBack="";
    if (nota>=90 && nota<=100){
    feedback="Excelente";
    }else if (nota>=75&& nota<=89){
        feedback="Bien";
    }else if(nota>=60&&nota<=74){
        feedback="suficiente";
    }else if(nota>=0&&nota<=59){
        feedback="No aprueba";
    }
    else{
        feedback="Nota inválida";
    }
    return console.log("La calificación " + nota + ": " + feedback);
}
evaluadorDeNotas(74);
evaluadorDeNotas(92);
evaluadorDeNotas(-10);
evaluadorDeNotas(85);
evaluadorDeNotas(50);
