// Obtener todos los botones del id "services-buttons"
let botones = document.querySelectorAll("#services-buttons");
// Recorrer cada botón y añadir un evento de clic
botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    // Eliminar la clase de todos los botones
    botones.forEach(b => {
        b.classList.remove("bg-black")
        b.classList.remove("text-white")
        b.classList.remove("scale-105")
    });

    // Añadir las clases al botón clicado
    botones.forEach(b => {
        boton.classList.add("bg-black");
        boton.classList.add("text-white");
        boton.classList.add("scale-105");
    });

  });
});
