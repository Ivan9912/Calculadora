var text_a = document.getElementById ("texto__A");
var boton_a = document.getElementById ("boton__enviar");

var di = document.getElementById ("dibujito");
var lienzo = di.getContext ("2d");

var lineas = 30;
var l = 0;
var xf, yi;
var xi, yf;

dibujarLinea ("#24303c", 1, 150, 300, 150);
dibujarLinea ("#24303c", 150, 1, 150, 300);
dibujarLinea ("#24303c", 1, 1, 300, 1);
dibujarLinea ("#24303c", 1, 1, 1, 300);
dibujarLinea ("#24303c", 300 , 300, 1, 300);
dibujarLinea ("#24303c", 300 , 300, 300, 1);

for (l = 0; l < lineas; l += 0.1)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea ("red", 0 , yi, xf, 300);
    console.log("linea" + l);
}

for (l = 0; l < lineas; l += 0.1)
{
    xi = 300 - (10 * l);
    yf = 300 - (10 * (l + 1));
    dibujarLinea ("blue", xi, 0, 300, yf);
    console.log("linea" + l);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}