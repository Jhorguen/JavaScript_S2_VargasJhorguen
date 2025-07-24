let listaHamburguesas = [
  {
    nombre: "Clásica",
    categoria: "Clásica",
    ingredientes: [
      "Pan",
      "Carne de res",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
      "Cebolla",
      "Mayonesa",
      "Ketchup",
    ],
    precio: 10,
    chef: "ChefA",
  },
  {
    nombre: "Vegetariana",
    categoria: "Vegetariana",
    ingredientes: [
      "Pan integral",
      "Hamburguesa de lentejas",
      "Queso suizo",
      "Espinacas",
      "Cebolla morada",
      "Aguacate",
      "Mayonesa vegana",
    ],
    precio: 8,
    chef: "ChefB",
  },
  {
    nombre: "Doble Carne",
    categoria: "Gourmet",
    ingredientes: [
      "Pan de sésamo",
      "Doble carne de res",
      "Queso cheddar",
      "Bacon",
      "Lechuga",
      "Cebolla caramelizada",
      "Salsa BBQ",
    ],
    precio: 12,
    chef: "ChefC",
  },
];

export function openMenuHamburguesas() {
  let eleccion = parseInt(
    prompt(
      "===== Manage - Hamburguesas ======\n 1. Guardar nueva hamburguesa \n 2. Ver las hamburguesas \n 3. Eliminar hamburguesa\n 4. Volver al menu principal\n "
    )
  );

  if (eleccion === 1) {
    alert("Ingresa los datos de la nueva hamburguesa");
    let name = prompt("Nombre:");
    let categoria = prompt("Categoria:");
    let ingredientes = prompt("Precio:");
    let price = parseFloat(prompt("Precio:"));
    let chef = prompt("Chef:");

    let newHamburguesa = {
      nombre: name,
      categoria: categoria,
      ingredientes: ingredientes,
      precio: price,
      chef: chef,
    };

    let saveOrNo = prompt(
      "Para guardar presione(S), para cancelar presione (C)"
    ).toLocaleLowerCase();
    if (saveOrNo === "s") {
      listaHamburguesas.push(newHamburguesa);
    }
    alert("--Hamburguesa guardada correctamente!--");
  } else if (eleccion === 2) {
    for (let i = 0; i < listaHamburguesas.length; i++) {
      let hamburguesa = listaHamburguesas[i];
      let mensaje =
        "============================\n" +
        "==== Hamburguesa #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        hamburguesa.nombre +
        "\n" +
        "categoria: " +
        hamburguesa.categoria +
        "\n" +
        "ingredientes: " +
        hamburguesa.ingredientes +
        "\n" +
        "precio: " +
        hamburguesa.precio +
        "\n" +
        "chef: " +
        hamburguesa.chef +
        "\n";
      ("---------------------------");
      alert(mensaje);
    }
  } else if (eleccion === 3) {
    for (let i = 0; i < listaHamburguesas.length; i++) {
      let hamburguesa = listaHamburguesas[i];
      let mensaje =
        "============================\n" +
        "==== Hamburguesa #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        hamburguesa.nombre;
      alert(mensaje);
    }
    let idChef =
      parseInt(prompt("Ingrese el numero del chef del cual desea eliminar")) -
      1;
    listaHamburguesas.splice(idChef);
  } else if (eleccion === 4) {
    return;
  }
}
