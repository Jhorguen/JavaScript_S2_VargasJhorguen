export let listaChefs = [
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

export function openMenuChefs(){
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
          let mensaje =
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
          let mensaje =
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
