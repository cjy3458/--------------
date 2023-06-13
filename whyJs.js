const button = document.querySelector("button");

let modal;
let backdrop;

button.addEventListener("click", showModal);

function showModal() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent = "Really?";
  modalText.className = "modalTitle";

  const modalCancle = document.createElement("button");
  modalCancle.textContent = "Cancel";
  modalCancle.className = "btn btn--alt";
  modalCancle.addEventListener("click", closeModal);

  const modalConfirm = document.createElement("button");
  modalConfirm.textContent = "confirm";
  modalConfirm.className = "btn";
  modalConfirm.addEventListener("click", closeModal);

  modal.append(modalText);
  modal.append(modalCancle);
  modal.append(modalConfirm);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", closeModal);

  document.body.append(backdrop);
}

function closeModal() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
