let elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach((duvida) => {
  console.log(duvida);
  duvida.addEventListener("click", () => {
    duvida.classList.toggle("ativa");
  });
});
