import { deleteClientModal } from "./createDeleteModal.js";
import { editClientModal } from "./editClient.js";
import { svgEdit, svgRemove } from "./svg.js";
import { createContactItemType, formatDate, formatTime } from "./utils.js";

export const createClientItem = (data) => {
  const clientTr = document.createElement("tr"),
    clientId = document.createElement("td"),
    clientFullName = document.createElement("td"),
    clientName = document.createElement("span"),
    clientSurname = document.createElement("span"),
    clientLastName = document.createElement("span"),
    clientCreated = document.createElement("td"),
    createdDate = document.createElement("span"),
    createdTime = document.createElement("span"),
    clientChanged = document.createElement("td"),
    changedDate = document.createElement("span"),
    changedTime = document.createElement("span"),
    clientContacts = document.createElement("td"),
    clientAction = document.createElement("td"),
    clientEdit = document.createElement("button"),
    clientRemove = document.createElement("button"),
    clientEditSvg = document.createElement("span"),
    clientRemoveSvg = document.createElement("span"),
    deleteClient = deleteClientModal(),
    editClient = editClientModal(data),
    editSpinnerWrapper = document.createElement("div"),
    editSpinnerShadow = document.createElement("div"),
    editSpinnerBox = document.createElement("div"),
    editSpinnerLine1 = document.createElement("div"),
    editSpinnerLine2 = document.createElement("div"),
    editSpinnerLine3 = document.createElement("div"),
    removeSpinnerWrapper = document.createElement("div"),
    removeSpinnerShadow = document.createElement("div"),
    removeSpinnerBox = document.createElement("div"),
    removeSpinnerLine1 = document.createElement("div"),
    removeSpinnerLine2 = document.createElement("div"),
    removeSpinnerLine3 = document.createElement("div");

  clientTr.classList.add("client-item", "align-middle");
  clientId.classList.add("client-id");
  clientFullName.classList.add("client-fio");
  clientName.classList.add("client-name");
  clientSurname.classList.add("client-surname");
  clientLastName.classList.add("client-lastName");
  clientCreated.classList.add("client-created");
  createdDate.classList.add("created-date");
  createdTime.classList.add("created-time");
  clientChanged.classList.add("client-changed");
  changedDate.classList.add("changed-date");
  changedTime.classList.add("changed-time");
  clientContacts.classList.add("client-contact");
  clientAction.classList.add("client-action");
  clientEdit.classList.add("client-edit");
  clientRemove.classList.add("client-remove");
  clientEditSvg.classList.add("client-edit_svg");
  clientRemoveSvg.classList.add("client-remove_svg");
  editSpinnerWrapper.classList.add("edit-spinner_wrapper");
  editSpinnerShadow.classList.add("edit-spinner_shadow");
  editSpinnerBox.classList.add("edit-spinner_box");
  editSpinnerLine1.classList.add("edit-spinner_line1");
  editSpinnerLine2.classList.add("edit-spinner_line2");
  editSpinnerLine3.classList.add("edit-spinner_line3");
  removeSpinnerWrapper.classList.add("remove-spinner_wrapper");
  removeSpinnerShadow.classList.add("remove-spinner_shadow");
  removeSpinnerBox.classList.add("remove-spinner_box");
  removeSpinnerLine1.classList.add("remove-spinner_line1");
  removeSpinnerLine2.classList.add("remove-spinner_line2");
  removeSpinnerLine3.classList.add("remove-spinner_line3");

  clientTr.id = data._id;
  clientId.textContent = data._id.substr(data._id.length - 6);
  clientName.textContent = data.name;
  clientSurname.textContent = data.surname;
  clientLastName.textContent = data.lastName;
  createdDate.textContent = formatDate(data.createdAt);
  createdTime.textContent = formatTime(data.createdAt);
  changedDate.textContent = formatDate(data.updatedAt);
  changedTime.textContent = formatTime(data.updatedAt);
  clientEditSvg.innerHTML = svgEdit;
  clientRemoveSvg.innerHTML = svgRemove;

  clientEdit.addEventListener("click", () => {
    editSpinnerWrapper.style.display = "block";
    clientEditSvg.style.opacity = "0";
    setTimeout(() => {
      document.body.append(editClient.editModal);
      setTimeout(() => {
        editClient.editModalContent.classList.add("modal-scale");
      }, 500);
      document.querySelector(".label-name").style.opacity = "1";
      document.querySelector(".span-name").style.opacity = "1";
      document.querySelector(".label-surname").style.opacity = "1";
      document.querySelector(".span-surname").style.opacity = "1";
      document.querySelector(".label-lastName").style.opacity = "1";
      editSpinnerWrapper.style.display = "none";
      clientEditSvg.style.opacity = "1";
    }, 1500);
  });

  const deleteById = () => {
    import("./clientsApi.js").then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener("click", () => {
        try {
          const spinnerTextShow = document.querySelector(
            ".delete-modal_delete"
          );
          deleteClient.deleteSpinner.style.display = "flex";
          deleteClient.deleteSpinner.style.left = "22px";
          spinnerTextShow.style.color = "transparent";
          spinnerTextShow.style.textShadow = "none";

          setTimeout(() => {
            deleteClientItem(data._id);
            document.getElementById(data._id).remove();
            deleteClient.deleteModalContent.classList.remove("modal-scale");
            deleteClient.deleteModal.remove();
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
  };

  clientRemove.addEventListener("click", () => {
    removeSpinnerWrapper.style.display = "block";
    clientRemoveSvg.style.opacity = "0";
    setTimeout(() => {
      deleteById();
      document.body.append(deleteClient.deleteModal);
      setTimeout(() => {
        deleteClient.deleteModalContent.classList.add("modal-scale");
      }, 500);
      removeSpinnerWrapper.style.display = "none";
      clientRemoveSvg.style.opacity = "1";
    }, 1500);
  });

  for (const contact of data.contacts) {
    createContactItemType(contact.type, contact.value, clientContacts);
  }

  clientFullName.append(clientName, clientSurname, clientLastName);
  clientCreated.append(createdDate, createdTime);
  clientChanged.append(changedDate, changedTime);
  editSpinnerBox.append(editSpinnerLine1, editSpinnerLine2, editSpinnerLine3);
  editSpinnerWrapper.append(editSpinnerShadow, editSpinnerBox);
  removeSpinnerBox.append(
    removeSpinnerLine1,
    removeSpinnerLine2,
    removeSpinnerLine3
  );
  removeSpinnerWrapper.append(removeSpinnerShadow, removeSpinnerBox);
  clientEdit.append(clientEditSvg, editSpinnerWrapper);
  clientRemove.append(clientRemoveSvg, removeSpinnerWrapper);
  clientAction.append(clientEdit, clientRemove);
  clientTr.append(
    clientId,
    clientFullName,
    clientCreated,
    clientChanged,
    clientContacts,
    clientAction
  );

  return clientTr;
};
