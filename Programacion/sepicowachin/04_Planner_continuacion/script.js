// Elementos del DOM
const agregarBtn = document.getElementById('agregarActividad');
const calendarioDiv = document.getElementById('calendario');
const generarBtn = document.getElementById('generarCalendario');
const calendarioGeneradoDiv = document.getElementById('calendarioGenerado');

// Función para agregar una actividad
agregarBtn.addEventListener('click', function () {
    // Obtener los valores seleccionados por el usuario
    const dia = document.getElementById('dia').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFin = document.getElementById('horaFin').value;
    const actividad = document.getElementById('actividad').value;

    // Verificar que los campos no estén vacíos
    if (!dia || !horaInicio || !horaFin || !actividad) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear una nueva entrada en el calendario
    const nuevaEntrada = document.createElement('div');
    nuevaEntrada.classList.add('calendario-entry');

    // Contenido de la nueva entrada con botón de eliminar
    nuevaEntrada.innerHTML = `
        <span>${dia}</span> - ${horaInicio} a ${horaFin}: ${actividad}
        <button class="eliminar-btn">🗑️</button>
    `;

    // Añadir la nueva entrada al calendario
    calendarioDiv.appendChild(nuevaEntrada);

    // Añadir la funcionalidad de eliminar al botón
    const eliminarBtn = nuevaEntrada.querySelector('.eliminar-btn');
    eliminarBtn.addEventListener('click', function () {
        nuevaEntrada.remove();
    });

    // Limpiar los campos del formulario
    document.getElementById('horaInicio').value = '';
    document.getElementById('horaFin').value = '';
});

// Función para generar el calendario
generarBtn.addEventListener('click', function () {
    const actividades = document.querySelectorAll('.calendario-entry');

    // Verificar si no hay actividades
    if (actividades.length === 0) {
        calendarioGeneradoDiv.innerHTML = '<p>No hay actividades agregadas.</p>';
        return;
    }

    // Crear una tabla para mostrar el calendario
    let tablaCalendario = '<table class="calendario-table"><tr><th>Día</th><th>Hora de Inicio</th><th>Hora de Fin</th><th>Actividad</th></tr>';

    actividades.forEach(function (actividad) {
        const detalles = actividad.textContent.split('🗑️')[0].split(' - ');
        const dia = detalles[0];
        const tiempoActividad = detalles[1].split(': ');
        const horas = tiempoActividad[0].split(' a ');
        const nombreActividad = tiempoActividad[1];

        // Agregar fila a la tabla
        tablaCalendario += `<tr><td>${dia}</td><td>${horas[0]}</td><td>${horas[1]}</td><td>${nombreActividad}</td></tr>`;
    });

    tablaCalendario += '</table>';

    // Mostrar la tabla en el div
    calendarioGeneradoDiv.innerHTML = tablaCalendario;
});
