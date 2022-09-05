//! -----------------VARIABLES QUE DEFINEN EL PRESUPUESTO----------------------

/*Horas mínimas de trabajo y precio individual:*/
const horas_minimo = 4;
const precio_hora = 3200;

/*Kilómetros mínimas incluidos de trabajo y precio individual:*/
const km_minimo = 55;
const precio_km_adicional = 145;

//! --------------------------CREACION DE VARIABLES--------------------------

/*Variables que definen el presupuesto final:*/
let precio_por_hora = 0;
let precio_por_km = 0;
let precio_final = 0;

/*Valores de horas y kilómetros, para luego cargar por usuario en "prompt":*/
let horas_recorrido = 0;
let km_recorrido = 0;

let horas_ingresadas_parseint = 0;   
let km_recorrido_parseint = 0;  

/*Cantidad de presupuestos a solicitar:*/
let cantidad_presupuestos = 0;


/*String vacio para luego completar con motivo a cada costo:*/
let motivo_precio_por_hora = "";
let motivo_precio_por_km = "";


/*Definimos la cantidad de presupuestos como:*/
let i=1; 

/*Definimos el array de presupuestos contabilizados como:*/
let array_presupuestos=[];  

/*Defino una lista con los presupuestos ordenados:*/
let presupuestos_ordenados=[];  


/*Defino una lista de numero para verificar si intervienen en algun promp (analizo totalidad o no de numeros):*/
const numeros_a_verificar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  

let dato_telefono_persona = "";

let dato_nombre_persona = ""; 

let presupuesto_localstorage = "";  

let presupuesto_guardado_previo_localstorage = JSON.stringify(localStorage.getItem("lista_presupuestos_cargados"));  

let lista_concatenada="";  

let cantidad_botones_borrar=0;  

let cantidad_botones_borrar_previo=0;

let cantidad_botones_mostrar_previo=0;

let fecha_string =""; 

let servicio_numero ="";

let servicio ="";