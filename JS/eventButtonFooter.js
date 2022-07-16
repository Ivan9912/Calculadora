const buttonAux = document.getElementById ("boton__enviar");
buttonAux.addEventListener ("mouseover", () => {buttonAux.setAttribute ("style", "background-color:#001851; color:white; border: 2px solid #ffffff;");});
buttonAux.addEventListener ("mouseout", () => {buttonAux.setAttribute ("style", "background-color:white; color:#001851; border: 2px solid #001851;");});
buttonAux.addEventListener ("click", () => {alert ("Este botón aún no contiene una funcionalidad. \nPor favor, vuelve a intentar otro día.");});