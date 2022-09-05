//! --------------------------CREACION DE FUNCIONES PARA LOCALSTORAGE y DOM --------------------------

function borrar_datos_ingresados() {
    document.getElementById("nombre_completo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidad_horas").value = "";
    document.getElementById("cantidad_kilometros").value = "";
}

function almacena_localstorage (clave,valor) {
    localStorage.setItem(clave,valor);
}

function pushea_presupuesto_individual() {

    array_presupuestos.push({id:i, horas: horas_recorrido, kms: km_recorrido, precio: precio_final, 
        motivo_precio_hora: motivo_precio_por_hora, motivo_precio_km: motivo_precio_por_km,
        servicio: servicio,
        fecha_presup:fecha_string}); 
    
    presupuesto_localstorage = almacena_localstorage ("lista_presupuestos_cargados",JSON.stringify(array_presupuestos)); 

    i=i+1;

    return i,  array_presupuestos, presupuesto_localstorage;
}

function ordenar_presupuestos() {
    for (const presupuesto of array_presupuestos) {
        presupuestos_ordenados.push(
            "Presupuesto N° " + presupuesto.id +")" + "  " + "\n\n" +
            "--> Servicio: " + presupuesto.servicio + "  " + "\n\n" +
            "--> Fecha: " + presupuesto.fecha_presup + "  "  + "\n\n" +
            "--> Km: " + presupuesto.kms + ", Horas: " + presupuesto.horas + ", Precio: " + presupuesto.precio + ".  " + "\n\n" +
            "--> " + presupuesto.motivo_precio_hora + " " + presupuesto.motivo_precio_km + ")" + "  " + "  " + "\n\n"
        );
    }; 

    return presupuestos_ordenados;
}

function mostrar_presupuestos_en_dom() {
    let texto_presupuestos_generados_dom=document.getElementById("presupuestos_generados_dom");

    if (presupuestos_ordenados.length-1 == 0) {
        texto_presupuestos_generados_dom.innerHTML = `${presupuestos_ordenados[presupuestos_ordenados.length-1]}`; 
    } 
    else {
        texto_presupuestos_generados_dom.innerHTML = `${document.getElementById("presupuestos_generados_dom").innerHTML}`+ `${presupuestos_ordenados[presupuestos_ordenados.length-1]}`; 
    }
}

function parsear_html() {
    var txt;
    txt = document.getElementById('presupuestos_generados_dom').value;
    var text = txt.split("  ");
    var mensaje_presup_html = text.join('<br/>');
    document.getElementById('presupuestos_generados_dom').innerHTML = mensaje_presup_html;
}

function agrega_datos_contacto_superior(){
    var texto_dom=document.getElementById('presupuestos_generados_dom').innerHTML
    texto_dom=  `Nombre: ${dato_nombre_persona}, Teléfono: ${dato_telefono_persona}, Mail: ${dato_mail_persona} <br/><br/> \n` + texto_dom;
    document.getElementById('presupuestos_generados_dom').innerHTML = texto_dom;
}

function quita_datos_contacto_superior(){
    var texto_dom=document.getElementById('presupuestos_generados_dom').innerHTML
    texto_dom = texto_dom.slice(texto_dom.indexOf("\n")+1, texto_dom.length);
    document.getElementById('presupuestos_generados_dom').innerHTML = texto_dom;
}

function desparsear_html() {
    var txt;
    txt = document.getElementById('presupuestos_generados_dom').value;
    var text = txt.split('<br/>');
    var mensaje_presup_html = text.join("  ");
    document.getElementById('presupuestos_generados_dom').innerHTML = mensaje_presup_html;
}

//! --------------------------CREACION DE FUNCIONES PARA LOCALSTORAGE y DOM (L.S. con informacion)--------------------------

function verifica_localstorage () {

    if (presupuesto_guardado_previo_localstorage!="null") {
        let texto_presupuestos_generados_dom=document.getElementById("presupuestos_generados_dom");
        texto_presupuestos_generados_dom.innerHTML = "";
        texto_presupuestos_generados_dom.innerHTML = "Ya tiene presupuestos previamente cargados." + "\n\n" + "Desea verlos o borrarlos?";

        oculta_inputs_datos();

        oculta_boton_presupuestar ();

        oculta_boton_borrar_ingresado ();

        generar_botones_presupuesto_existente(); 
        
        cantidad_botones_borrar_previo +=1

        cantidad_botones_mostrar_previo +=1
    }

    else {
        mostrar_inputs_datos_recorrido();
    }
}

function recupera_presupuesto_previo () {

    array_presupuestos = (JSON.parse(localStorage.getItem("lista_presupuestos_cargados")));

    i = array_presupuestos.length + 1;
}

function generar_botones_presupuesto_existente() {

    let area_presupuesto_generado = document.getElementById("hijo_presupuesto_mostrado");

    let contenedor_botones_presupuesto = document.createElement ("DIV");
    contenedor_botones_presupuesto.setAttribute("class", "mt-2");

    let boton_mostrar_presupuesto = document.createElement ("INPUT");
    boton_mostrar_presupuesto.setAttribute("type", "submit");
    boton_mostrar_presupuesto.setAttribute("value", "Mostrar Presupuestos Previos");
    boton_mostrar_presupuesto.setAttribute("id", "btn_mostrar_presupuesto");
    boton_mostrar_presupuesto.setAttribute("class", "btn btn-dark btn-block border-0 py-2");

    let boton_borrar_presupuesto_previo = document.createElement ("INPUT");
    boton_borrar_presupuesto_previo.setAttribute("type", "submit");
    boton_borrar_presupuesto_previo.setAttribute("value", "Borrar Presupuestos Previos");
    boton_borrar_presupuesto_previo.setAttribute("id", "btn_borrar_presupuesto_previo");
    boton_borrar_presupuesto_previo.setAttribute("class", "btn btn-dark btn-block border-0 py-2");

    contenedor_botones_presupuesto.appendChild(boton_mostrar_presupuesto);
    contenedor_botones_presupuesto.appendChild(boton_borrar_presupuesto_previo);

    area_presupuesto_generado.append(contenedor_botones_presupuesto);

    let btn_mostrar_presupuesto = document.getElementById("btn_mostrar_presupuesto");
    btn_mostrar_presupuesto.addEventListener("click", handleBtnClick_mostrar_presupuesto_previo);

    let btn_borrar_presupuesto_previo = document.getElementById("btn_borrar_presupuesto_previo");
    btn_borrar_presupuesto_previo.addEventListener("click", handleBtnClick_borrar_presupuesto);
}

function genera_boton_borrar_presupuesto () {

    while (cantidad_botones_borrar==0 && cantidad_botones_borrar_previo==0) {

        let area_presupuesto_generado = document.getElementById("hijo_presupuesto_mostrado");

        let contenedor_boton_borrar_presupuesto = document.createElement ("DIV");
        contenedor_boton_borrar_presupuesto.setAttribute("class", "mt-2");
        contenedor_boton_borrar_presupuesto.setAttribute("id", "contenedor_btn_borrar_presupuesto");

        let boton_borrar_presupuesto = document.createElement ("INPUT");
        boton_borrar_presupuesto.setAttribute("type", "submit");
        boton_borrar_presupuesto.setAttribute("value", "Borrar Presupuestos");
        boton_borrar_presupuesto.setAttribute("id", "btn_borrar_presupuesto");
        boton_borrar_presupuesto.setAttribute("class", "btn btn-dark btn-block border-0 py-2");

        contenedor_boton_borrar_presupuesto.appendChild(boton_borrar_presupuesto);

        area_presupuesto_generado.append(contenedor_boton_borrar_presupuesto);
        
        let btn_borrar_presupuesto = document.getElementById("btn_borrar_presupuesto");
        btn_borrar_presupuesto.addEventListener("click", handleBtnClick_borrar_presupuesto);

        cantidad_botones_borrar +=1;
    }
}


function oculta_inputs_datos() {
    document.getElementById("nombre_completo").disabled = true;
    document.getElementById("telefono").disabled = true;   
    document.getElementById("email").disabled = true;
    document.getElementById("cantidad_horas").disabled = true;   
    document.getElementById("cantidad_kilometros").disabled = true;
    document.getElementById("seleccione_servicio").disabled = true;
}

function oculta_boton_presupuestar() {
    document.getElementById("btn_presupuestar").disabled = true;
}
function oculta_boton_borrar_ingresado() {
    document.getElementById("btn_borrar_ingresado").disabled = true;   
}



function mostrar_inputs_datos_recorrido() {
    document.getElementById("cantidad_horas").disabled = false;   
    document.getElementById("cantidad_kilometros").disabled = false;
    document.getElementById("seleccione_servicio").disabled = false;
}

function oculta_nombre_telefono_mail() {
    document.getElementById("nombre_completo").disabled = true;   
    document.getElementById("telefono").disabled = true;  
    document.getElementById("email").disabled = true;  
    document.getElementById("button_enviar_presupuesto").disabled = true;
    document.getElementById("presupuestos_generados_dom").disabled = true;
}
function muestra_nombre_telefono_mail() {
    document.getElementById("nombre_completo").disabled = false;   
    document.getElementById("telefono").disabled = false;  
    document.getElementById("email").disabled = false;  
    document.getElementById("button_enviar_presupuesto").disabled = false;
    document.getElementById("presupuestos_generados_dom").disabled = false;
}


function concatenar_array (lista) {

    for (let l=0; l<lista.length; l++) {
        lista_concatenada = lista_concatenada + lista[l];   
    }
    
    return lista_concatenada;
}
function mostrar_presupuestos_previo_en_dom() {
    let texto_presupuestos_generados_dom=document.getElementById("presupuestos_generados_dom");

    texto_presupuestos_generados_dom.innerHTML = ""; //Se borra el texto de inicio.

    let presupuesto_previo_unificado = `${concatenar_array(presupuestos_ordenados)}`
        
    texto_presupuestos_generados_dom.innerHTML = `${presupuesto_previo_unificado.slice()}`; 
}

function elimina_btn_mostrar_presupuesto() {
    btn_mostrar_presupuesto.remove()
}

function cambia_nombre_btn_borrar_presupuesto_previo() {
    btn_borrar_presupuesto_previo.setAttribute("value", "Borrar Presupuestos");
}


function muestra_botones_carga_datos() {
    document.getElementById("btn_presupuestar").disabled = false;
    document.getElementById("btn_borrar_ingresado").disabled = false;
}

function muestra_boton_presupuestar() {
    document.getElementById("btn_presupuestar").disabled = false;
}

function muestra_boton_borrar_ingresado() {
    document.getElementById("btn_borrar_ingresado").disabled = false;
}


function reload(){
    var container_text_area = document.getElementById("presupuestos_generados_dom");
    container_text_area.innerHTML=""
    i=1;
    array_presupuestos=[];
}