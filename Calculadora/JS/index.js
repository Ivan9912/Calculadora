
//El backslash se hace con Alt + 92.
alert ("¡Hola! \n¿Qué tal? \nÉste es mí pequeño proyecto para entrar al mundo de la programación y del diseño web. \nTan sólo ingresá 3 números; de los cuales serán interpretados como a, b y c. Son números que determinan una función cuadratica (ax² + bx + c = 0), que usualmente se estudia de la forma polínomica. \nÉsta calculadora analíza si tiene raíces (x=0) y las halla; si no las halla da como resultado 'NaN', como también halla su ordenada al orígen y su vértice en (X,Y). \nEntretenéte, estudía, comprobá los resultados. \n¡Saludos!");

let a = prompt("Hola necesito el valor que quieras asignarle a la variable de 'a': ");
while ( /\D/.test(a)) {
    a = prompt("Ingresá un número y no una letra para 'a', por favor: ");};
while (a == null || a == "" || /\D/.test(a)) {
    a = prompt ("¿Estás seguro de que ingresaste algún número para 'a'?\nVuelve a intentar.");};


let b = prompt("Ahora ¿Qué valor tendrá 'b'?:" );
while ( /\D/.test(b)) {
    b = prompt("Ingresá un número y no una letra para 'b', por favor: ");};
while (b == null || b == "" || /\D/.test(b)) {
    b = prompt ("¿Estás seguro de que ingresaste algún número para 'b'?\nVuelve a intentar.");};


let c = prompt("Y por último, ingresá el valor de 'c': ");
while ( /\D/.test(c)) {
    c = prompt("Ingresá un número y no una letra para 'c', por favor: ");};
while (c == null || c == "" || /\D/.test(c)) {
    c = prompt ("¿Estás seguro de que ingresaste algún número para 'c'?\nVuelve a intentar.");};

