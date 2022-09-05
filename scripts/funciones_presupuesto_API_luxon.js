//! --------------------------CREACION DE FUNCIONES VINCULADAS CON LIBRERIAS (LUXON)--------------------------

function genera_fecha_presupuesto() {
    const DateTime = luxon.DateTime;
    const tiempo_presupuesto = DateTime.now();

    fecha = {
        dia: tiempo_presupuesto.day,
        mes: tiempo_presupuesto.month,
        anio: tiempo_presupuesto.year,
        hora: tiempo_presupuesto.hour,
        minuto: tiempo_presupuesto.minute,
        segundo: tiempo_presupuesto.second
    };

    fecha_string = `${fecha.dia}/${fecha.mes}/${fecha.anio} - ${fecha.hora}:${fecha.minuto}:${fecha.segundo}`;

    return fecha, fecha_string;
};