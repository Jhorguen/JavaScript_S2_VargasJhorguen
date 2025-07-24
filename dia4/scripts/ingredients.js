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
  



  export function openMenuIngredientes() {
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
        let mensaje =
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
        let mensaje =
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