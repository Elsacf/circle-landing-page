const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact__form"),
    $inputs = d.querySelectorAll(".contact__form>div>input[required]");

  console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact__form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact__form>div>input[required]")) {
      let $input = e.target,
        pattern = $input.pattern;
      //console.log($input, pattern);

      let regex = new RegExp(pattern);
      return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }
  });
}
