import { sendClientData } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";
import { createClientModal } from "./createClientModal.js";
import { createContacts } from "./createContacts.js";
import { deleteClientModal } from "./createDeleteModal.js";
import {
  validationClientContacts,
  validationClientForm,
} from "./validation.js";

export const editClientModal = (data) => {
  const editModal = document.createElement("div"),
    editModalContent = document.createElement("div"),
    createForm = createClientModal(),
    titleId = document.createElement("span");

  editModal.classList.add(
    "modal-edit",
    "site-modal",
    "modal-active",
    "modal",
    "all-modal"
  );
  editModalContent.classList.add(
    "modal-edit_content",
    "modal-content",
    "all-modal_content",
    "modal-active"
  );
  createForm.modalTitle.classList.remove("animation-modal_title");
  createForm.modalTitle.classList.add("animation-edit-modal_title");
  titleId.classList.add("modal-id");

  document.addEventListener("click", (e) => {
    if (e.target === editModal) {
      editModalContent.classList.remove("modal-scale");
      editModal.remove();
    }
  });

  createForm.modalClose.addEventListener("click", () => {
    editModalContent.classList.remove("modal-scale");
    editModal.remove();
  });

  createForm.inputName.value = data.name;
  createForm.inputSurname.value = data.surname;
  createForm.inputLastName.value = data.lastName;

  for (const contact of data.contacts) {
    const createContact = createContacts();

    createContact.contactName.textContent = contact.type;
    createContact.contactInput.value = contact.value;

    createForm.blockContacts.prepend(createContact.contact);
  }

  if (data.contacts.length === 10) {
    createForm.btnContact.classList.remove("modal-btn_contact--active");
  }
  if (data.contacts.length >= 6) {
    editModalContent.classList.add("correct-height");
  } else {
    editModalContent.classList.remove("correct-height");
  }

  createForm.form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validationClientForm()) {
      return;
    }

    const contactTypes = document.querySelectorAll(".contact-name"),
      contactValues = document.querySelectorAll(".contact-input");
    let contacts = [],
      client = {};

    for (let i = 0; i < contactTypes.length; i++) {
      if (!validationClientContacts(contactTypes[i], contactValues[i])) {
        return;
      }
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    client.name = createForm.inputName.value;
    client.surname = createForm.inputSurname.value;
    client.lastName = createForm.inputLastName.value;
    client.contacts = contacts;

    const spinner = document.querySelector(".spinner-wrapper");
    const spinnerTextShow = document.querySelector(".modal-btn_save");
    spinnerTextShow.style.color = "transparent";
    spinnerTextShow.style.textShadow = "none";

    try {
      spinner.style.display = "flex";
      const editData = await sendClientData(client, "PATCH", data._id);
      document
        .querySelector(".table-body")
        .replaceChild(
          createClientItem(editData),
          document.getElementById(editData._id)
        );
      document.querySelector(".modal-edit").remove();
    } catch (error) {
      console.log(error);
    } finally {
      spinner.style.display = "none";
    }
  });

  createForm.btnCancel.addEventListener("click", (e) => {
    e.preventDefault();

    const deleteClient = deleteClientModal();
    editModalContent.classList.remove("modal-scale");
    editModal.remove();
    document.body.append(deleteClient.deleteModal);
    setTimeout(() => {
      deleteClient.deleteModalContent.classList.add("modal-scale");
    }, 500);
    deleteClient.deleteModalBack.addEventListener("click", () => {
      deleteClient.deleteModalContent.classList.remove("modal-scale");
      deleteClient.deleteModal.remove();
      document.body.append(editModal);
      setTimeout(() => {
        editModalContent.classList.add("modal-scale");
      }, 500);
    });

    import("./clientsApi.js").then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener("click", () => {
        try {
          const spinnerTextShow = document.querySelector(
            ".delete-modal_delete"
          );
          spinnerTextShow.style.color = "transparent";
          spinnerTextShow.style.textShadow = "none";
          deleteClient.deleteSpinner.style.display = "flex";
          setTimeout(() => {
            deleteClientItem(data._id);
            document.getElementById(data._id).remove();
            deleteClient.deleteModalContent.classList.remove("modal-scale");
            deleteClient.deleteModal.remove();
            // document.querySelector(".edit-modal").remove();
          }, 1500);
        } catch (error) {
          console.log(error);
        } finally {
          setTimeout(() => {
            deleteClient.deleteSpinner.style.display = "flex";
          }, 1500);
        }
      });
    });
  });

  createForm.modalTitle.textContent = "Change data";
  createForm.btnCancel.textContent = "Delete client";
  titleId.textContent = "ID:" + data._id.substr(data._id.length - 6);

  editModalContent.append(titleId);
  editModalContent.append(
    createForm.modalClose,
    createForm.modalTitle,
    createForm.form
  );
  editModal.append(editModalContent);

  return {
    editModal,
    editModalContent,
    createForm,
  };
};
