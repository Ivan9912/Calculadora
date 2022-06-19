
document.write ("<br>",
    "RESULTADOS: ", "<br>","<br>",
    "El valor de <strong>A</strong> es:  ", "<br>", 
    "a = " + a , "<br>", "<br>", 
    "El de <strong>B</strong> es:  ", "<br>", 
    "b = " + b, "<br>", "<br>", 
    "Y por último el de <strong>C</strong> es: ", "<br>", 
    "c = " + c, "<br>", "<br>", 

    "La ordenada al Origen es:  " + "y = "  + c, "<br>", "<br>", 
    "El valor de la raíz de la determinate es: " + raiz, "<br>","<br>", 
    "La primera Raíz(X1) está ubicada en: " + "x1 = " + x_1, "<br>","<br>", 
    "La segunda Raíz(X2) está ubicada en: " + "x2 = " + x_2, "<br>","<br>", 
    "El Vx está ubicado en: " + vertice_x, "<br>","<br>", 
    "El Vy está ubicado en: " + vertice_y, "<br>","<br>", 
    "Vértice (x.y):  " + "(" + vertice_x + "," + vertice_y + ")", "<br>","<br>","<br>", "<br>");

//el simbolo de "al cuadrado" esta hecho con Alt + 253. 
document.write (
    "<strong>Ésta es la función expresada en forma canónica: </strong>", "<br>", "<br>", 
    "y = " + a + " * [x - (" + vertice_x + ")]² + " + vertice_y, "<br>", "<br>", 
    "<strong>Ésta es la función expresada en forma factorizada: </strong>", "<br>", "<br>", 
    "y = " + a + " * [x - (" + x_1 + ")] * [x - (" + x_2 + ")] + " + vertice_y, "<br>", "<br>", 
    "<strong>Ésta es la función expresada en forma polinomica: </strong>", "<br>", "<br>", 
    a + "x² + " + b + "x + " + c, "<br>", "<br>");
