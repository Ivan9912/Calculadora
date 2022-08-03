const getValueInput = () => {
    let inputValueA;
    inputValueA = document.getElementById("domTextElementA").value;
    inputValueA = parseFloat (inputValueA);

    let inputValueB;
    inputValueB = document.getElementById("domTextElementB").value;
    inputValueB = parseFloat (inputValueB);

    let inputValueC;
    inputValueC = document.getElementById("domTextElementC").value; 
    inputValueC = parseFloat (inputValueC);


    let determinatRootData;
    determinatRootData = (inputValueB ** 2) - (4 * inputValueA * inputValueC) ** 0.5;

    let xData1;
    xData1 = parseFloat ((-inputValueB) - (determinatRootData) / (2 * inputValueA));

    let xData2;
    xData2 = parseFloat ((-inputValueB) + (determinatRootData) / (2 * inputValueA));

    let vertexXData;
    vertexXData = parseFloat ((-inputValueB) / (2 * inputValueA));

    let vertexYData;
    vertexYData  = parseFloat (((vertexXData * inputValueA) ** 2) + (vertexXData * inputValueB) + inputValueC);

    document.getElementById("valueInput").innerHTML = "RESULTADOS: <br><br> El valor de <strong>A</strong> es:  <br>a = " + inputValueA + " <br><br>El de <strong>B</strong> es: <br> b = " + inputValueB + "<br><br> Y por último el de <strong>C</strong> es: <br> c = " + inputValueC + "<br><br> La ordenada al Origen es: y =  " + inputValueC +"  <br><br> El valor de la raíz de la determinate es: " + determinatRootData + " <br><br> La primera Raíz (X1) está ubicada en:  x1 =  " + xData1 + "<br><br> La segunda Raíz (X2) está ubicada en:  x2 =  " + xData2 + "<br><br> El Vx está ubicado en:  " + vertexXData + "<br><br> El Vy está ubicado en:  " + vertexYData + " <br><br> Vértice (x,y): (" + vertexXData + ", " + vertexYData + ") <br><br><br><br></br><strong>Ésta es la función expresada en forma canónica: </strong> <br> <br> Y =    " + inputValueA + " * [X - (" + vertexXData + ")]² + (" + vertexYData + ") <br> <br> <strong>Ésta es la función expresada en forma factorizada: </strong> <br> <br> Y =    " + inputValueA + " * [X - (" + xData1 + ")] * [X - (" + xData2 + ")] <br><br><strong>Ésta es la función expresada en forma polinomica: </strong><br> <br> Y =   " + inputValueA + "X² + (" + inputValueB + ")X + (" + inputValueC + ")<br><br><br><br>"
    ;}
    //El simbolo de "al cuadrado" está hecho con Alt + 253. //
