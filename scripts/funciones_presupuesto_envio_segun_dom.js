//! --------------------------CREACION DE FUNCIONES PARA ENVIO PRESUPUESTO SEGUN DATOS DOM--------------------------

function pide_datos_persona_nombre() {
    dato_nombre_persona = document.getElementById("nombre_completo").value;
    return dato_nombre_persona;
}
function verifica_texto_ingresado_es_texto (texto_ingresado) {
    j = 0;
    cantidad_letras_promp = 0;

    for (j=0; j<texto_ingresado.length; j++) {
        !numeros_a_verificar.includes(texto_ingresado[j]) && (cantidad_letras_promp +=1);
    }

    texto_ingresado_es_texto = (cantidad_letras_promp !== texto_ingresado.length || texto_ingresado.length==0 || texto_ingresado[0]==" ") ? false : true;

    return texto_ingresado_es_texto;
}
function emite_o_no_error_nombre() {
    if (!texto_ingresado_es_texto) {
        let texto_error_nombre_completo = document.getElementById("nombre_completo");
        texto_error_nombre_completo.setAttribute("placeholder", "Nombre - Error");
    }
} 


function pide_datos_persona_telefono() {
    dato_telefono_persona = document.getElementById("telefono").value;
    return dato_telefono_persona;
}
function verifica_numero_ingresado_es_numero (numero_ingresado) {
    j = 0;
    cantidad_numeros_promp = 0;

    for (j=0; j<numero_ingresado.length; j++) {
        numeros_a_verificar.includes(numero_ingresado[j]) && (cantidad_numeros_promp +=1);
    }
   
    numero_ingresado_es_numero = (cantidad_numeros_promp !== numero_ingresado.length || numero_ingresado.length==0) ? false : true;

    return numero_ingresado_es_numero;
}
function emite_o_no_error_telefono() {
    if (!numero_ingresado_es_numero) {
        let texto_error_telefono = document.getElementById("telefono");
        texto_error_telefono.setAttribute("placeholder", "Teléfono - Error");
    }
}


function pide_datos_persona_mail() {
    dato_mail_persona = document.getElementById("email").value;
    return dato_mail_persona;
}

function verifica_mail_ingresado_es_mail (mail_ingresado) {
    mail_ingresado_es_mail = (!mail_ingresado.includes("@")) ? false : true;
    return mail_ingresado_es_mail;
}
function emite_o_no_error_mail() {
    if (!mail_ingresado_es_mail) {
        let texto_error_mail = document.getElementById("email");
        texto_error_mail.setAttribute("placeholder", "Email - Error");
    }
}