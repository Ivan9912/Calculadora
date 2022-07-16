const buttonAux = document.getElementById ("boton__enviar");
buttonAux.addEventListener ("mouseover", () => {buttonAux.setAttribute ("style", "background-color:#24303c; color:white;");});
buttonAux.addEventListener ("mouseout", () => {buttonAux.setAttribute ("style", "background-color:white; color:#24303c");});
buttonAux.addEventListener ("click", () => {alert ("Este botón aún no contiene una funcionalidad. \nPor favor, vuelve a intentar otro día.");});