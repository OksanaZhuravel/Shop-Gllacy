var mailing = document.querySelector(".mailing");
var mailingButton = mailing.querySelector(".mailing-button");
var formMailing = mailing.querySelector("form");
var emailMailing = mailing.querySelector("[name=email]");
var storageEmailMailing = localStorage.getItem("email");
var isStorageSupportMailing = true;
var storageMailing = "";
try {
  storageMailing = storageEmailMailing;
}
catch (err) {
  isStorageSupportMailing = false;
}
emailMailing.addEventListener("click", function () {
  mailingButton.classList.remove("mailing-show");
  if (storageEmailMailing) {
    emailMailing.value = storageEmailMailing;
  }
  else {
    emailMailing.focus();
  }
});
formMailing.addEventListener("submit", function (evt) {
  if (!emailMailing.value) {
    evt.preventDefault();
    mailingButton.classList.remove("mailing-show");
    mailing.offsetWidth = mailing.offsetWidth;
    mailingButton.classList.add("mailing-show");
  }
  else {
    if (isStorageSupportMailing) {
      localStorage.setItem("email", storageEmailMailing.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mailing.classList.contains("mailing-show")) {
      mailingButton.classList.remove("mailing-show");
    }
  }
});
