import { editClientModal } from "./editClient.js";

export const deleteClientModal = () => {
  const deleteModalContent = document.createElement("div"),
    modalClose = document.createElement("button"),
    deleteModalTitle = document.createElement("h2"),
    deleteModalText = document.createElement("p"),
    deleteModal = document.createElement("div"),
    deleteModalDelete = document.createElement("button"),
    deleteModalBack = document.createElement("button"),
    deleteSpinner = document.createElement("div"),
    unitSpinner1 = document.createElement("div"),
    unitSpinner2 = document.createElement("div"),
    unitSpinner3 = document.createElement("div"),
    unitSpinner4 = document.createElement("div"),
    unitSpinner5 = document.createElement("div"),
    unitSpinner6 = document.createElement("div"),
    unitSpinner7 = document.createElement("div"),
    unitSpinner8 = document.createElement("div"),
    unitSpinner9 = document.createElement("div"),
    unitSpinner10 = document.createElement("div");

  deleteSpinner.classList.add("spinner-wrapper");
  unitSpinner1.classList.add("spinner-block");
  unitSpinner2.classList.add("spinner-block");
  unitSpinner3.classList.add("spinner-block");
  unitSpinner4.classList.add("spinner-block");
  unitSpinner5.classList.add("spinner-block");
  unitSpinner6.classList.add("spinner-block");
  unitSpinner7.classList.add("spinner-block");
  unitSpinner8.classList.add("spinner-block");
  unitSpinner9.classList.add("spinner-block");
  unitSpinner10.classList.add("spinner-block");
  deleteModalContent.classList.add(
    "delete-modal_content",
    "modal-content",
    "all-modal_content",
    "modal-active"
  );
  modalClose.classList.add("modal-close", "modal-btn_close");
  deleteModalTitle.classList.add(
    "delete-modal_title",
    "modal-title",
    "animation-delete-modal_title"
  );
  deleteModalText.classList.add("delete-modal_text");
  deleteModal.classList.add(
    "delete-modal",
    "modal",
    "all-modal",
    "modal-active"
  );
  deleteModalDelete.classList.add("delete-modal_delete");
  deleteModalBack.classList.add("delete-modal_back", "modal-btn_cancel");

  deleteModalTitle.textContent = "Delete client";
  deleteModalText.textContent = "Are you sure you want to delete this client?";
  deleteModalDelete.textContent = "Delete";
  deleteModalBack.textContent = "Back";

  deleteSpinner.append(
    unitSpinner1,
    unitSpinner2,
    unitSpinner3,
    unitSpinner4,
    unitSpinner5,
    unitSpinner6,
    unitSpinner7,
    unitSpinner8,
    unitSpinner9,
    unitSpinner10
  );
  deleteModalDelete.append(deleteSpinner);
  deleteModalContent.append(
    modalClose,
    deleteModalTitle,
    deleteModalText,
    deleteModalDelete,
    deleteModalBack
  );
  deleteModal.append(deleteModalContent);

  window.addEventListener("click", (e) => {
    if (e.target === deleteModal) {
      deleteModalContent.classList.remove("modal-scale");
      deleteModal.remove();
    }
  });

  modalClose.addEventListener("click", () => {
    deleteModalContent.classList.remove("modal-scale");
    deleteModal.remove();
  });

  deleteModalBack.addEventListener("click", () => {
    deleteModalContent.classList.remove("modal-scale");
    deleteModal.remove();
  });

  return {
    deleteModal,
    deleteModalContent,
    deleteModalDelete,
    deleteModalBack,
    deleteSpinner,
  };
};
