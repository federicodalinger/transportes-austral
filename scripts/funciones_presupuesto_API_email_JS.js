//!---------------------------------FUNCIONES POR API "emailJS"--------------------------------------

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    pide_datos_persona_nombre();
    pide_datos_persona_telefono();
    pide_datos_persona_mail();

    verifica_texto_ingresado_es_texto (dato_nombre_persona);
    verifica_numero_ingresado_es_numero (dato_telefono_persona);
    verifica_mail_ingresado_es_mail(dato_mail_persona);

    if (verifica_texto_ingresado_es_texto (dato_nombre_persona)
        && verifica_numero_ingresado_es_numero (dato_telefono_persona)
        && verifica_mail_ingresado_es_mail(dato_mail_persona)) {

        parsear_html();

        agrega_datos_contacto_superior();
     
        btn.innerHTML = 'Enviando...';
        
        const serviceID = 'contact_service';
        const templateID = 'contact_form';
        
        emailjs.sendForm(serviceID, templateID, this).then(() => {
                        btn.innerHTML = 'Enviado!';

                        setTimeout(function(){
                            btn.innerHTML = 'Enviar presupuestos';
                        }, 2500);
                    }, 

                    (err) => {
                        btn.innerHTML = `${JSON.stringify(err)}`;

                        setTimeout(function(){
                            btn.innerHTML = 'Enviar presupuestos';
                        }, 2500);
                    }   
        );
        quita_datos_contacto_superior();
        desparsear_html();
    }

    else {
        emite_o_no_error_nombre();
        emite_o_no_error_telefono();
        emite_o_no_error_mail();
    }
}
);