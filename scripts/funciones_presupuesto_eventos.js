//! -------------------------FUNCIONES EJECUTADAS AL ENTRAR EN EL HTML-------------------

verifica_localstorage (); 
oculta_nombre_telefono_mail();

let boton_presupuestar = document.getElementById("btn_presupuestar");
boton_presupuestar.addEventListener("click", handleBtnClick_presupuestar);

let boton_borrar_carga_datos = document.getElementById("btn_borrar_ingresado");
boton_borrar_carga_datos.addEventListener("click", handleBtnClick_borrar_carga_datos);

let btn = document.getElementById('button_enviar_presupuesto'); // * Agregado en el Desafío Entregable N°4

//! --------------------------LLAMADO DE FUNCIONES POR EVENTOS DE BOTONES--------------------------

function handleBtnClick_borrar_presupuesto(e){
    id=0
    reload(); //para recargar el cuadro del textarea
    localStorage.clear(); 

    mostrar_inputs_datos_recorrido();
    muestra_boton_presupuestar();
    muestra_boton_borrar_ingresado();
    oculta_nombre_telefono_mail();

    if (cantidad_botones_borrar!=0){
        document.getElementById("btn_borrar_presupuesto").remove();
        cantidad_botones_borrar=0
    }

    if (cantidad_botones_borrar_previo!=0){
        document.getElementById("btn_borrar_presupuesto_previo").remove()
        cantidad_botones_borrar_previo=0

        if (cantidad_botones_mostrar_previo!=0) {
            document.getElementById("btn_mostrar_presupuesto").remove()
        }
    }
}

function handleBtnClick_mostrar_presupuesto_previo(e){
    e.preventDefault();

    recupera_presupuesto_previo();
    ordenar_presupuestos();
    mostrar_presupuestos_previo_en_dom();
    elimina_btn_mostrar_presupuesto();
    cambia_nombre_btn_borrar_presupuesto_previo();
    muestra_boton_presupuestar();
    muestra_boton_borrar_ingresado();
    muestra_nombre_telefono_mail();
    mostrar_inputs_datos_recorrido();

    cantidad_botones_mostrar_previo=0;
}

function handleBtnClick_borrar_carga_datos (e) {
    e.preventDefault();
    borrar_datos_ingresados ();
}

function handleBtnClick_presupuestar(e){
    e.preventDefault();

    verifica_datos_recorrido_cargados(); // Pide y verifica datos de inputs.

    // Si todos los inputs son acordes segun su condicion, genera presupuesto, lo pushea al array, lo ordena y muestra en DOM.
    if (verifica_numero_ingresado_es_numero (horas_recorrido)
        && verifica_numero_ingresado_es_numero (km_recorrido) 
    ) {
        genera_presupuesto_individual();
        pushea_presupuesto_individual();
        ordenar_presupuestos();
        mostrar_presupuestos_en_dom();
        genera_boton_borrar_presupuesto();
        muestra_nombre_telefono_mail()       
    }
}