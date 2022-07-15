
const getValueInput = () =>
    {
    let inputValue = document.getElementById("domTextElement").value;
    let inputValue2 = document.getElementById("domTextElement2").value;
    let inputValue3 = document.getElementById("domTextElement3").value; 

    document.getElementById("valueInput").innerHTML = "<br> RESULTADOS: <br><br> El valor de <strong>A</strong> es:  <br>a = " + inputValue + " <br><br>El de <strong>B</strong> es: <br> b = " + inputValue2 + "<br><br> Y por último el de <strong>C</strong> es: <br> c = " + inputValue3 + "<br><br> La ordenada al Origen es: y = <br><br> El valor de la raíz de la determinate es: <br><br> La primera Raíz(X1) está ubicada en:  x1 = <br><br> La segunda Raíz(X2) está ubicada en:  x2 = <br><br> El Vx está ubicado en: <br><br> El Vy está ubicado en: <br><br> Vértice (x.y):  <br><br><br><br></br>"; 
    }

let Calculate3 = document.getElementById ("Calculate2");
Calculate3.addEventListener("mouseover", () => {Calculate3.setAttribute ("style", "background-color:#24303c; color:white;");});
Calculate3.addEventListener("mouseout", () => {Calculate3.setAttribute ("style", "background-color:white;");});









function calculateTotal (num1, num2, num3) 
    {
        console.log(num1 + num2 + num3);
    }

    
    document.write ("<br>",
        "RESULTADOS: ", "<br>","<br>",
        "El valor de <strong>A</strong> es:  ", "<br>", 
        "a = " + a.value , "<br>", "<br>", 
        "El de <strong>B</strong> es:  ", "<br>", 
        "b = " + b.value, "<br>", "<br>", 
        "Y por último el de <strong>C</strong> es: ", "<br>", 
        "c = " + c.value, "<br>", "<br>", 

        "La ordenada al Origen es:  " + "y = "  + c, "<br>", "<br>", 
        "El valor de la raíz de la determinate es: " + raiz, "<br>","<br>", 
        "La primera Raíz(X1) está ubicada en: " + "x1 = " + x_1, "<br>","<br>", 
        "La segunda Raíz(X2) está ubicada en: " + "x2 = " + x_2, "<br>","<br>", 
        "El Vx está ubicado en: " + vertice_x, "<br>","<br>", 
        "El Vy está ubicado en: " + vertice_y, "<br>","<br>", 
        "Vértice (x.y):  " + "(" + vertice_x + "," + vertice_y + ")", "<br>","<br>","<br>", "<br>");

    //el simbolo de "al cuadrado" está hecho con Alt + 253. 
    document.write (
        "<strong>Ésta es la función expresada en forma canónica: </strong>", "<br>", "<br>", 
        "y = " + a + " * [x - (" + vertice_x + ")]² + " + vertice_y, "<br>", "<br>", 
        "<strong>Ésta es la función expresada en forma factorizada: </strong>", "<br>", "<br>", 
        "y = " + a + " * [x - (" + x_1 + ")] * [x - (" + x_2 + ")] + " + vertice_y, "<br>", "<br>", 
        "<strong>Ésta es la función expresada en forma polinomica: </strong>", "<br>", "<br>", 
        a + "x² + " + b + "x + " + c, "<br>", "<br>");
    



    