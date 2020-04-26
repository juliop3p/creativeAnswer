const target = document.querySelector("[writeMachine]");
const text =
  "Minha resposta a pergunta: Se você pudesse ser um aplicativo, qual você seria e por quê?";

const lettersArray = text.split("");

lettersArray.forEach((elem, index) => {
  setTimeout(() => (target.innerHTML += elem), 75 * index);
});

const firstTarget = document.querySelectorAll(".card");
const secondTarget = document.querySelectorAll(".ca-gr");

window.addEventListener("scroll", () => {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3.5;

  firstTarget.forEach((elem) => {
    if (windowTop > elem.offsetTop) {
      elem.style.opacity = 1;
    } else {
      elem.style.opacity = 0;
    }
  });
});

window.addEventListener("scroll", () => {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3.5;

  secondTarget.forEach((elem) => {
    if (windowTop > elem.offsetTop) {
      elem.classList.add("animate");
    } else {
      elem.classList.remove("animate");
    }
  });
});
