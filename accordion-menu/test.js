const menu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}

function test1() {
  for (const i=0; i<10; i++) {
    console.log(i)
  };
}

function test2() {
  for (const i=0; i<10; i++) {
    console.log(i)
  };
}