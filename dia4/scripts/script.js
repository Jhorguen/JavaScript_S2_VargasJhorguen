// PROGRAMA DESARROLLADO POR JHORGUEN VARGAS MORENO

import { openMenuHamburguesas } from './burgers.js';
import { openMenuCategoria } from './categories.js';
import { openMenuChefs } from './chefs.js';
import { openMenuIngredientes } from './ingredients.js';


// ---------------------------------------------------




let opcion = parseInt(
  prompt(
    "¿Que deseas hacer? \n 1. Manage - Ingredientes \n 2. Manage - Categorias \n 3. Manage - Hamburguesas \n 4. Manage - Chef \n 5. Close"
  )
);

let booleano = true;

while (booleano === true) {
  if (opcion == 1) {
    openMenuIngredientes();
  } else if (opcion == 2) {
    openMenuCategoria();
  } else if(opcion == 3){
    openMenuHamburguesas()
  }else if(opcion == 4){
    openMenuChefs()
  } else if(opcion == 5){
    booleano = false
    alert("Hasta la vista baby... :)")
  }

}
