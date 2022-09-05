//! --------------------------CREACION DE FUNCIONES PARA CALCULAR PRESUPUESTO----------------

function pide_horas_presupuestar() {
    horas_recorrido = document.getElementById("cantidad_horas").value;
    return horas_recorrido;
}
function emite_o_no_error_horas() {
    if (!verifica_numero_ingresado_es_numero (horas_recorrido)) {
        let texto_error_horas = document.getElementById("cantidad_horas");
        texto_error_horas.setAttribute("placeholder", "Cantidad de horas - Error");
    }
}
function presupuesto_por_hora (horas_ingresadas) {
    horas_ingresadas_parseint = parseInt(horas_ingresadas);

    if (horas_ingresadas_parseint<=horas_minimo) {
        precio_por_hora = horas_minimo*precio_hora;
        motivo_precio_por_hora = "Se esta cobrando el mínimo de " + horas_minimo  +" horas.";
    }
            
    else if (horas_ingresadas_parseint>horas_minimo) {

        precio_por_hora = horas_ingresadas_parseint*precio_hora;

        if ((horas_ingresadas_parseint-horas_minimo)==1){
            motivo_precio_por_hora = "Se esta cobrando el mínimo de " + horas_minimo  +" horas y "  + (horas_ingresadas_parseint-horas_minimo) + " hora adicional.";
        }
        else{
            motivo_precio_por_hora = "Se esta cobrando el mínimo de " + horas_minimo  +" horas y "  + (horas_ingresadas_parseint-horas_minimo) + " horas adicionales.";
        }
    }

    return horas_ingresadas_parseint, precio_por_hora, motivo_precio_por_hora;
}
    

function pide_kilometross_presupuestar() {
    km_recorrido = document.getElementById("cantidad_kilometros").value;
    return km_recorrido;
}
function emite_o_no_error_kilometros() {
    if (!verifica_numero_ingresado_es_numero (km_recorrido)) {
        let texto_error_kilometros = document.getElementById("cantidad_kilometros");
        texto_error_kilometros.setAttribute("placeholder", "Cantidad de kilómetros - Error");
    }


}
function presupuesto_por_km (kilometros_ingresados) {
    km_recorrido_parseint = parseInt(kilometros_ingresados);

    if (km_recorrido_parseint<=km_minimo) {
        precio_por_km = 0;
        motivo_precio_por_km = "No se está cobrando kilómetro adicional, por ser menor o igual a " + km_minimo +" kilómetros.";
    }
    
    else if (km_recorrido_parseint>km_minimo) {
        precio_por_km = (km_recorrido_parseint-km_minimo)*precio_km_adicional;

        if ((km_recorrido_parseint-km_minimo)==1){
            motivo_precio_por_km = "Se está cobrando " + (km_recorrido_parseint-km_minimo) + " kilómetro adicional, a los " + km_minimo +" kilómetros incluidos.";
        }
        else {
            motivo_precio_por_km = "Se está cobrando " + (km_recorrido_parseint-km_minimo) + " kilómetros adicionales, a los " + km_minimo +" kilómetros incluidos.";
        }
    }

    return km_recorrido_parseint, precio_por_km, motivo_precio_por_km; 
}

function pide_servicio_presupuestar(){
    servicio_numero = document.getElementById("seleccione_servicio").value;
    
    servicio = (servicio_numero==1) ? "Logística" : "Mudanza" 

    return servicio;
}


function verifica_datos_recorrido_cargados() {
    pide_horas_presupuestar();
    verifica_numero_ingresado_es_numero (horas_recorrido);
    emite_o_no_error_horas();

    pide_kilometross_presupuestar();
    verifica_numero_ingresado_es_numero (km_recorrido);
    emite_o_no_error_kilometros();

    pide_servicio_presupuestar();
}

function suma_de_presupuestos() {
    precio_final = precio_por_hora + precio_por_km;
    return precio_final;
}
function genera_presupuesto_individual() {
    genera_fecha_presupuesto(); // * Agregado en el Desafío Entregable N°3
    presupuesto_por_hora (horas_recorrido);
    presupuesto_por_km (km_recorrido);
    suma_de_presupuestos (); 
}