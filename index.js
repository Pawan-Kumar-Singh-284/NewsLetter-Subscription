const emailInput = document.querySelector(".emaild");
const subscribeBtn = document.querySelector(".subscribe");
const Container = document.querySelector(".container");
const Error = document.querySelector(".error");
const WelcomeMessage = document.querySelector(".welcome-message");
const dismissBtn = document.querySelector(".dismiss");
const Email = document.querySelector(".email-value");

dismissBtn.addEventListener("click", (e) => {
  WelcomeMessage.classList.add("hidden");
  Container.classList.remove("hidden");
  Error.classList.add("hidden");
  emailInput.classList.remove(".error-state");
  emailInput.value = "";
});

subscribeBtn.addEventListener("click", (e) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isCorrect = emailRegex.test(emailInput.value);

  if (isCorrect) {
    Container.classList.add("hidden");
    WelcomeMessage.classList.remove("hidden");

    Email.innerHTML = emailInput.value;
  } else {
    Error.classList.remove("hidden");
    emailInput.classList.add("error-state");
  }
});
