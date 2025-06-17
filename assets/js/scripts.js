const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");


function changeTheme(){
  
  //está función es para llamar desde el html el atributo data-theme
  const currentTheme = rootHtml.getAttribute("data-theme");
  //aqui el tema actual para alternar el color del tema


  //if ternario
  currentTheme === "lilas-escuro" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "lilas-escuro")


  //esto es para llamar toggle del icono sol y luna
  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

//aqui el evento del icono al hacer clic
toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})


particlesJS.load('particles-js', 'assets/js/particles-config.json', function () {
  console.log('Particles.js carregado com sucesso!');
});
