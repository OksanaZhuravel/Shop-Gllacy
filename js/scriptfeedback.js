var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-feedback");
var mask = document.querySelector(".modal-mask");
var close = document.querySelector(".modal-feedback-close");
var form = popup.querySelector(".modal-feedback-user-registration");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");
var isStorageSupport = true;
var storage = "";
try {
  storage = storageLogin;
}
catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  mask.classList.add("modal-mask-show");
  if (storageLogin && storageEmail) {
    login.value = storageLogin;
    email.value = storageEmail;
    message.focus();
  }
  else {
    login.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  mask.classList.remove("modal-mask-show");
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      mask.classList.remove("modal-mask-show");
    }
  }
});
