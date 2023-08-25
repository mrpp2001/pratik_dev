// ------------Developer-------------------------------

let dev = document.getElementById('dev');

let typewriter = new Typewriter(dev, {
    loop: true
});

typewriter.typeString('FrontEnd Developer')
    .pauseFor(2500)
    .deleteAll()
    // .typeString('Web Designer')
    // .pauseFor(2500)
    // .deleteAll()
    .typeString(`<strong>UI Developer</strong>`)
    .pauseFor(2500)
    .start();



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
