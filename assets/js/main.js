const nombres = [],
  telefonos = [];
let opciones;
let intentos = 3;

// coloar todo a minuscula y sacar los espacios
const normalizar = (nombre) =>
  typeof nombre === "string" && nombre.trim().toLowerCase();

const buscarNombre = (nombre) => {
  let i = 0;
  let indice = -1;
  let encontrado = false;
  while (i < nombres.length && !encontrado) {
    if (nombres[i] === nombre) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  return indice;
};

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

  const telefonoIngresado = prompt(
    "Ingrese el número de telefono del contacto"
  );
  if (telefonoIngresado === null) return;
  const telefono = telefonoIngresado.trim();

  nombres.push(nombre);
  telefonos.push(telefono);

  alert(`Contacto ${nombre}, Teléfono: ${telefono} agregado`);
};

// muestro todos los contactos
const verContactos = () => {
  if (nombres.length === 0) {
    alert("No hay contactos en la agenda. Agrega al menos uno.");
    return;
  }
  for (let i = 0; i < nombres.length; i++) {
    console.log(`Nombre: ${nombres[i]}, Teléfono: ${telefonos[i]}`);
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
  if (nombres.length === 0) {
    alert("No hay contactos en la agenda. Agrega al menos uno.");
    return;
  }
  const nombreIngresado = prompt("Ingrese el nombre del contacto a eliminar");
  if (nombreIngresado === null) return;
  const nombre = normalizar(nombreIngresado);

  const index = buscarNombre(nombre);
  if (index === -1) {
    alert(`Contacto ${nombre} no encontrado`);
    return;
  }

  // verifico si acepta eliminar o no el contaco
  if (confirmacionEliminacion()) {
    nombres.splice(index, 1);
    telefonos.splice(index, 1);
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
  if (nombres.length === 0) {
    alert("No hay contactos en la agenda. Agregue al menos uno.");
    return;
  }

  const nombreIngresado = prompt("Cual es el nombre del contacto a editar?");
  if (nombreIngresado === null) return;
  const nombre = normalizar(nombreIngresado);

  const index = buscarNombre(nombre);
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
    const index = buscarNombre(nombre);

    nombres[index] = nuevoNombre;
    telefonos[index] = nuevoTelefonoIngresado;
    alert(
      `Contacto ${nombre} editado a ${nuevoNombre} Teléfono: ${nuevoTelefonoIngresado}`
    );
  } else {
    alert("Edicion cancelada");
  }
};

while (opciones !== 5 && intentos > 0) {
  opciones = menu();

  switch (opciones) {
    case 1:
      agregarContacto();
      break;
    case 2:
      verContactos();
      s;
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
