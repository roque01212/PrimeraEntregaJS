const agenda = [];
let opciones;

// coloar todo a minuscula y sacar los espacios
const normalizar = (nombre) =>
  typeof nombre === "string" && nombre.trim().toLowerCase();

// muestro las opciones del menu
const menu = () => {
  opciones = prompt(
    "1. Agregar contacto\n2. Ver contactos\n3. Eliminar contacto\n4. Editar contacto\n5. Salir"
  );

  return parseInt(opciones);
};

// agrego contacto nuevo
const agregarContacto = () => {
  const nombreIngresado = prompt("Ingrese el nombre del contacto");
  if (nombreIngresado === null) return;
  const nombre = normalizar(nombreIngresado);
  const telefono = prompt("Ingrese el número de telefono del contacto");

  if (telefono === null) return;
  const contacto = [nombre, telefono.trim()];
  agenda.push(contacto);
  alert(`Contacto ${nombre}, Teléfono: ${telefono} agregado`);
};

// muestro todos los contactos
const verContactos = () => {
  if (agenda.length === 0) {
    alert("No hay contactos en la agenda. Agrega al menos uno.");
    return;
  }
  for (let contacto of agenda) {
    console.log(`Nombre: ${contacto[0]}, Teléfono: ${contacto[1]}`);
  }
};

// pregunta antes de eliminar
const confirmacionEliminacion = () => {
  const respuesta = confirm("¿Estas seguro de eliminar el contacto?");
  return respuesta;
};

// funcion para eliminar el contacto
const eliminarContacto = () => {
  // verifico que alla contactos en la agenda
  if (agenda.length === 0) {
    alert("No hay contactos en la agenda. Agrega al menos uno.");
    return;
  }
  const nombreIngresado = prompt("Ingrese el nombre del contacto a eliminar");
  if (nombreIngresado === null) return;
  const nombre = normalizar(nombreIngresado);

  const index = agenda.findIndex((contacto) => contacto[0] === nombre);
  if (index === -1) {
    alert(`Contacto ${nombre} no encontrado`);
    return;
  }
  // verifico si acepta eliminar o no el contaco
  if (confirmacionEliminacion()) {
    agenda.splice(index, 1);
    alert(`Contacto ${nombre} eliminado`);
  } else {
    alert("Eliminación cancelada");
  }
};

// pregunta antes de editar
const confirmacionEditar = () => {
  const respuesta = confirm("¿Estas seguro de editar el contacto?");
  return respuesta;
};

// Funcion para editar un contacto existente
const editarContacto = () => {
  if (agenda.length === 0) {
    alert("No hay contactos en la agenda. Agregue al menos uno.");
    return;
  }
  const nombreIngresado = prompt("Cual es el nombre del contacto a editar?");
  if (nombreIngresado === null) return;
  const nombre = normalizar(nombreIngresado);

  const index = agenda.findIndex((contacto) => contacto[0] === nombre);
  if (index === -1) {
    alert(`Contacto ${nombre} no encontrado en la agenda`);
    return;
  }

  const nuevoNombreIngresado = prompt("Nuevo nombre del contacto");
  if (nuevoNombreIngresado === null) return;
  const nuevoTelefonoIngresado = prompt(
    "Nuevo número de telefono del contacto"
  );
  if (nuevoTelefonoIngresado === null) return;

  if (confirmacionEditar()) {
    const nuevoNombre = normalizar(nuevoNombreIngresado);
    const index = agenda.findIndex((contacto) => contacto[0] === nombre);

    agenda[index] = [nuevoNombre, nuevoTelefonoIngresado];
    alert(
      `Contacto ${nombre} editado a ${nuevoNombre} Teléfono: ${nuevoTelefonoIngresado}`
    );
  } else {
    alert("Edicion cancelada");
  }
};
let intentos = 3;

while (opciones !== 5 && intentos > 0) {
  opciones = menu();

  switch (opciones) {
    case 1:
      agregarContacto();
      break;
    case 2:
      verContactos();
      break;
    case 3:
      eliminarContacto();
      break;
    case 4:
      editarContacto();
      break;
    case 5:
      alert("Muchas Gracias. ");
      break;
    default:
      intentos--;
      intentos !== 0
        ? alert(`Opción Incorrecta te quedan ${intentos} intentos`)
        : alert("Has superado el número de intentos permitidos.");
      break;
  }
}
