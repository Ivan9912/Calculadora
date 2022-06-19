var d = document.getElementById ("dibujito");
var lienzo = d.getContext ("2d");

lienzo.beginPath();
lienzo.strokeStyle = "#24303c";
lienzo.moveTo(0,150);
lienzo.lineTo(300,150);
lienzo.moveTo(150,0);
lienzo.lineTo(150,300);

lienzo.moveTo(0,0);
lienzo.lineTo(300,0);
lienzo.moveTo(0,0);
lienzo.lineTo(0,300);
lienzo.moveTo(300,300);
lienzo.lineTo(0,300);
lienzo.moveTo(300,300);
lienzo.lineTo(300,0);

lienzo.stroke();
lienzo.closePath();