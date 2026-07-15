(() => {
  const refs = {
    openModalButton: document.querySelector("[data-modal-open]"),
    closeModalButton: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalButton || !refs.closeModalButton || !refs.modal) {
    return;
  }

  const openModal = () => {
    refs.modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    refs.closeModalButton.focus();
  };

  const closeModal = () => {
    refs.modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    refs.openModalButton.focus();
  };

  refs.openModalButton.addEventListener("click", openModal);
  refs.closeModalButton.addEventListener("click", closeModal);

  refs.modal.addEventListener("click", (event) => {
    if (event.target === refs.modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && refs.modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
