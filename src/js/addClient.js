import { sendClientData } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { createClientModal } from "./createClientModal.js";
import {
  validationClientContacts,
  validationClientForm,
} from "./validation.js";

export const addClientModal = () => {
  const createForm = createClientModal(),
    modal = document.createElement("div"),
    modalContent = document.createElement("div");

  modal.classList.add("modal", "all-modal", "modal-active");
  modalContent.classList.add(
    "modal-content",
    "all-modal_content",
    "modal-active"
  );
  createForm.form.classList.add("add-client");

  modal.append(modalContent);
  modalContent.append(
    createForm.modalClose,
    createForm.modalTitle,
    createForm.form
  );

  document.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  createForm.modalClose.addEventListener("click", () => {
    modal.remove();
  });

  createForm.btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    modal.remove();
  });

  createForm.form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validationClientForm()) {
      return;
    }

    const contactTypes = document.querySelectorAll(".contact-name"),
      contactValue = document.querySelectorAll(".contact-input");

    let contacts = [],
      clientItem = {};

    for (let i = 0; i < contactTypes.length; i++) {
      if (!validationClientContacts(contactTypes[i], contactValue[i])) {
        return;
      }
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValue[i].value,
      });
    }

    clientItem.name = createForm.inputName.value;
    clientItem.surname = createForm.inputSurname.value;
    clientItem.lastName = createForm.inputLastName.value;
    clientItem.contacts = contacts;

    const spinner = document.querySelector(".spinner-wrapper");
    const spinnerTextShow = document.querySelector(".modal-btn_save");
    spinnerTextShow.style.color = "transparent";
    spinnerTextShow.style.textShadow = "none";

    try {
      spinner.style.display = "flex";
      const data = await sendClientData(clientItem, "POST");
      document.querySelector(".table-body").append(createClientItem(data));
      document.querySelector(".modal").remove();
    } catch (error) {
      console.log(error);
    } finally {
      spinner.style.display = "none";
    }
  });

  return modal;
};
