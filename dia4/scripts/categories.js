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
  
  export function openMenuCategoria() {
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
        let mensaje =
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
        let mensaje =
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