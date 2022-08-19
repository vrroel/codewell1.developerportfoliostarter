const menuBurger = document.querySelector(".header__menu--burguer");
console.log(menuBurger);

function mostrarMenu(){
  const headerNav = document.querySelector(".header__nav");
  headerNav.classList.toggle("active");  
}

menuBurger.addEventListener("click", mostrarMenu);

