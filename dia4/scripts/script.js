// PROGRAMA DESARROLLADO POR JHORGUEN VARGAS MORENO

// ------------------INGREDIENTES------------------

let listaIngredientes = [
  {
    nombre: "Pan",
    descripcion: "Pan de hamburguesa clásico",
    precio: 2.5,
    stock: 500,
  },
  {
    nombre: "Carne de res",
    descripcion: "Carne de res jugosa y sabrosa",
    precio: 8,
    stock: 300,
  },
  {
    nombre: "Queso cheddar",
    descripcion: "Queso cheddar derretido",
    precio: 1.5,
    stock: 200,
  },
];

function openMenuIngredientes() {
  let eleccion = parseInt(
    prompt(
      "===== Manage - Ingredientes ======\n 1. Guardar nuevo ingrediente \n 2. Ver los ingredientes \n 3. Eliminar ingrediente\n 4. Volver al menu principal\n "
    )
  );

  if (eleccion === 1) {
    alert("Ingresa los datos del nuevo ingrediente");
    let name = prompt("Nombre:");
    let description = prompt("Descripción:");
    let price = prompt("Precio:");
    let stock = prompt("Stock:");

    let newIngredients = {
      nombre: name,
      descripcion: description,
      precio: price,
      stock: stock,
    };

    let saveOrNo = prompt(
      "Para guardar presione(S), para cancelar presione (C)"
    ).toLocaleLowerCase();
    if (saveOrNo === "s") {
      listaIngredientes.push(newIngredients);
      // alert(JSON.stringify(listaIngredientes))
    }
    alert("--¡Ingrediente guardado correctamente!--");
  } else if (eleccion === 2) {
    for (let i = 0; i < listaIngredientes.length; i++) {
      let ingrediente = listaIngredientes[i];
      mensaje =
        "============================\n" +
        "==== Ingrediente #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        ingrediente.nombre +
        "\n" +
        "descripcion: " +
        ingrediente.descripcion +
        "\n" +
        "precio: " +
        ingrediente.precio +
        "\n" +
        "stock: " +
        ingrediente.stock +
        "\n" +
        "---------------------------";
      alert(mensaje);
    }
  } else if (eleccion === 3) {
    for (let i = 0; i < listaIngredientes.length; i++) {
      let ingrediente = listaIngredientes[i];
      mensaje =
        "============================\n" +
        "==== Ingrediente #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        ingrediente.nombre;
      alert(mensaje);
    }
    let idIngredient =
      parseInt(
        prompt("Ingrese el numero del ingrediente del cual desea eliminar")
      ) - 1;
    //   alert(idIngredient)
    listaIngredientes.splice(idIngredient);
  } else if (eleccion === 4) {
    return;
  }
}

// ------------------CATEGORIAS------------------

let listaCategorias = [
  {
    nombre: "Clásica",
    descripcion: "Hamburguesas clásicas y sabrosas",
  },
  {
    nombre: "Vegetariana",
    descripcion: "Hamburguesas sin carne, perfectas para vegetarianos",
  },
  {
    nombre: "Gourmet",
    descripcion: "Hamburguesas gourmet con ingredientes premium",
  },
];

function openMenuCategoria() {
  let eleccion = parseInt(
    prompt(
      "===== Manage - Categorias ======\n 1. Guardar nueva categoria \n 2. Ver las categorias \n 3. Eliminar categoria\n 4. Volver al menu principal\n "
    )
  );

  if (eleccion === 1) {
    alert("Ingresa los datos de la nueva categoria");
    let name = prompt("Nombre:");
    let description = prompt("Descripción:");

    let newCategories = {
      nombre: name,
      descripcion: description,
    };

    let saveOrNo = prompt(
      "Para guardar presione(S), para cancelar presione (C)"
    ).toLocaleLowerCase();
    if (saveOrNo === "s") {
      listaCategorias.push(newCategories);
    }
    alert("--Categoria guardada correctamente!--");
  } else if (eleccion === 2) {
    for (let i = 0; i < listaCategorias.length; i++) {
      let categoria = listaCategorias[i];
      mensaje =
        "============================\n" +
        "==== Categoria #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        categoria.nombre +
        "\n" +
        "descripcion: " +
        categoria.descripcion;
      alert(mensaje);
    }
  } else if (eleccion === 3) {
    for (let i = 0; i < listaCategorias.length; i++) {
      let categoria = listaCategorias[i];
      mensaje =
        "============================\n" +
        "==== Categoria #" +
        (i + 1) +
        " ====\n" +
        "nombre: " +
        categoria.nombre;
      alert(mensaje);
    }
    let idCategoria =
      parseInt(
        prompt("Ingrese el numero de la categoria que desea eliminar")
      ) - 1;
    listaCategorias.splice(idCategoria);
  } else if (eleccion === 4) {
    return;
  }
}

// ------------------HAMBURGUESAS------------------

let listaHamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]

function openMenuHamburguesas(){
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
        let chef = prompt("Chef:")
    
        let newHamburguesa= {
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
          mensaje =
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
            "\n"
            "---------------------------";
          alert(mensaje);
        }
      } else if (eleccion === 3) {
        for (let i = 0; i < listaHamburguesas.length; i++) {
          let hamburguesa = listaHamburguesas[i];
          mensaje =
            "============================\n" +
            "==== Hamburguesa #" +
            (i + 1) +
            " ====\n" +
            "nombre: " +
            hamburguesa.nombre;
          alert(mensaje);
        }
        let idChef =
          parseInt(
            prompt("Ingrese el numero del chef del cual desea eliminar")
          ) - 1;
        listaHamburguesas.splice(idChef);
      } else if (eleccion === 4) {
        return;
      }
    }

// ------------------CHEFS------------------

let listaChefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]

function openMenuChefs(){
    let eleccion = parseInt(
        prompt(
          "===== Manage - Chefs ======\n 1. Guardar nuevo chef \n 2. Ver lo chefs \n 3. Eliminar chef\n 4. Volver al menu principal\n "
        )
      );
    
      if (eleccion === 1) {
        alert("Ingresa los datos del nuevo chef");
        let name = prompt("Nombre:");
        let especialidad = prompt("Especialidad:");
    
        let newChef = {
          nombre: name,
          especialidad: especialidad,
        };
    
        let saveOrNo = prompt(
          "Para guardar presione(S), para cancelar presione (C)"
        ).toLocaleLowerCase();
        if (saveOrNo === "s") {
          listaChefs.push(newChef);
        }
        alert("--Chef guardado correctamente!--");
      } else if (eleccion === 2) {
        for (let i = 0; i < listaChefs.length; i++) {
          let chef = listaChefs[i];
          mensaje =
            "============================\n" +
            "==== Chef #" +
            (i + 1) +
            " ====\n" +
            "nombre: " +
            chef.nombre +
            "\n" +
            "especialidad: " +
            chef.descripcion;
          alert(mensaje);
        }
      } else if (eleccion === 3) {
        for (let i = 0; i < listaChefs.length; i++) {
          let chef = listaChefs[i];
          mensaje =
            "============================\n" +
            "==== Chef #" +
            (i + 1) +
            " ====\n" +
            "nombre: " +
            chef.nombre;
          alert(mensaje);
        }
        let idChef =
          parseInt(
            prompt("Ingrese el numero del chef que desea eliminar")
          ) - 1;
        listaChefs.splice(idChef);
      } else if (eleccion === 4) {
        return;
      }
}

// -----------------------------------------------------------------------------------

let opcion = parseInt(
  prompt(
    "¿Que deseas hacer? \n 1. Manage - Ingredientes \n 2. Manage - Categorias \n 3. Manage - Hamburguesas \n 4. Manage - Chef \n 5. Close"
  )
);

let booleano = true;

while (booleano === true) {
  if (opcion == 1) {
    openMenuIngredientes();
  } else if (eleccion == 2) {
    openMenuCategoria();
  } else if(eleccion == 3){
    openMenuHamburguesas()
  }else if(eleccion == 4){
    openMenuChefs()
  } else if(eleccion == 5){
    booleano = false
    alert("Hasta la vista baby... :)")
  }

}
