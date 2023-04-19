export default function openModal(formBtn, modal, closeModal) {
  const d = document;

  event.preventDefault();

  d.addEventListener("click", (e) => {
    if (e.target.matches(formBtn)) {
      d.querySelector(modal).classList.toggle("modal--show");
    }
    if (e.target.matches(closeModal)) {
      d.querySelector(modal).classList.remove("modal--show");
    }
  });
}
