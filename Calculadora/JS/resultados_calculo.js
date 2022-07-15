//Cálculo de la raiz situado en el numerador de la ecuación.
let raiz; 
raiz = ((b ** 2) - (4 * a * c)) ** 0.5;
raiz = parseFloat (raiz);

//Cálculo de los numeradores de ambas raíces resultantes finales.
let numerador_1;
numerador_1 = (-b) - (raiz);
numerador_1 = parseFloat (numerador_1);
let numerador_2;
numerador_2 = (-b) + (raiz);
numerador_2 = parseFloat (numerador_2);

//Cálculo finales de ambas raíces X1 y X2.
let x_1;
x_1 = numerador_1 / (2 * a);
x_1 = parseFloat (x_1);
let x_2;
x_2 = numerador_2 / (2 * a);
x_2 = parseFloat (x_2);

//Cálculo del Vértice en el eje X.
let vertice_x;
vertice_x = (-b) / (2 * a);
vertice_x = parseFloat (vertice_x);

//Cálculo del Vértice en el eje Y.
let X_a;
X_a = (vertice_x * a);
X_a = parseFloat (X_a);
let X_b;
X_b = (vertice_x * b);
X_b = parseFloat (X_b);
let vertice_y;
vertice_y = (X_a ** 2) + X_b + c;
vertice_y = parseFloat (vertice_y);